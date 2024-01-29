An elixir library used for processing audio and video.

Element: the most basic media processing entity in Membrane. 
You can create elements or use the ones provided.

Pipeline: a series of linked elements that perform a specific task.
Ex: pipeline can receive an incoming RTSP stream from a webcam and convert in into an HLS stream.

Membrane is delivered in packages including plugins, format, core, and standalone libraries.

Plugins are premade elements that can be used in a pipeline.
Name convention is `membrane_X_plugin` where X is the protocol.
Plugins can wrap libraries or tools and are published on hex.

Pipelines are how to create streaming applications. They allow you to spawn elements and establish data flow between them.

Elements in a pipeline are called children and the pipeline is the parent.

To create a pipeline implement `Membrane.Pipeline`. 

```elixir
Mix.install([ 
	:membrane_hackney_plugin, 
	:membrane_mp3_mad_plugin, 
	:membrane_portaudio_plugin, 
]) 

defmodule MyPipeline do 
	use Membrane.Pipeline 
	@impl true 
	def handle_init(_ctx, mp3_url) do 
		spec = child(%Membrane.Hackney.Source{location:mp3_url,hackney_opts: 
		[follow_redirect: true] }) 
		|> child(Membrane.MP3.MAD.Decoder) 
		|> child(Membrane.PortAudio.Sink) {[spec: spec], %{}} 
	end 
end 

mp3_url = "https://raw.githubusercontent.com/membraneframework/membrane_demo/master/simple_pipeline/sample.mp3"

Membrane.Pipeline.start_link(MyPipeline, mp3_url)
```

`use Membrane.Pipeline` makes the module `MyPipeline` a membrane pipeline.

`handle_init` is a callback function for pipelines that specifies the elements used and the order data flows through it.
the `child` function spawns an element
`handle_init` returns a tuple `{[spec: spec], %{}}`.

`Membrane.Pipeline.start_link(MyPipeline, mp3_url)` starts the pipeline.

Pads allow for the flow of data between elements. They are the inputs and outputs for an element.

There are two types of pads: input and output.
Source elements can only contain output pads.
Sink elements can only contain input pads.
Filter and Endpoint elements can contain both.

Pads must be linked to another pad and only links between input and output are allowed.

Pads are defined using the `def_input_pad` and `def_output_pad` macros.

Example: 
`def_input_pad :input, flow_control: :auto, accepted_format: %Membrane.RawAudio{channels: 2}`

Pads also have a `options` property. Its defined by using the `def_options` macro.

```elixir
def_options some_option: [ spec: integer() | string(), default: 0, description: """ This option is intended for... """ ], other_option: [ # ... ]
```

Creating elements involves implementing callbacks. Callbacks return actions.
Examples of callbacks are `handle_init`, `handle_setup`, `handle_playing`, and `handle_terminate`.

Example element:
```elixir
defmodule VolumeKnob do 
	@moduledoc """ 
	Membrane filter that changes the audio volume by the gain passed via options. 
	""" 
	use Membrane.Filter 
	
	alias Membrane.RawAudio 
	
	def_input_pad :input, accepted_format: RawAudio, flow_control: :auto 
	def_output_pad :output, accepted_format: RawAudio, flow_control: :auto 
	def_options gain: [ spec: float(), description: """ The factor by which the volume will be changed. A gain smaller than 1 reduces the volume and gain greater than 1 increases it. """ ] 
	
	@impl true 
	def handle_init(_ctx, options) do 
		{[], %{gain: options.gain}} 
	end
	 
	@impl true 
	def handle_process(:input, buffer, ctx, state) do 
		stream_format = ctx.pads.input.stream_format sample_size = RawAudio.sample_size(stream_format) 
		payload = 
			for <<sample::binary-size(sample_size) <- buffer.payload>>, into: <<>> do 
				value = RawAudio.sample_to_value(sample, stream_format) 
				scaled_value = round(value * state.gain) 
				RawAudio.value_to_sample(scaled_value, stream_format) 
		end 
	buffer = %Membrane.Buffer{buffer | payload: payload} {[buffer: {:output, buffer}], state} 
	end 
end
```

Bins are containers for elements and can be placed into / linked within pipelines. It can be perceived as a pipeline within an element. Bins can also be nested within each other.
Bins main uses are creating reusable element  groups and encapsulating children's logic.


