"use client";
import React from "react";
import "./style.css";
import { Divider, Link } from "@nextui-org/react";

//TODO: Whenever a section is in focus. i.e. user is on 1., create a focus event where it bolds/makes the section it correlates to on the privacysection appear
const PrivacyPage = () => {
  return (
    <>
      <div className="leftSection">
        <header className="text-3xl font-bold pb-4">
          Your Privacy matters.
        </header>
        <Divider orientation="horizontal" />
        <header className="text-xl font-semibold pt-4">SECTIONS</header>
        <div className="privacySection">
          <header className="spacing ">
            1. INFORMATION YOU CHOOSE TO SUBMIT
          </header>
          <header className="spacing ">2. INFORMATION WE COLLECT</header>
          <header className="spacing ">3. HOW WE USE INFORMATION</header>
          <header className="spacing ">4. HOW WE SHARE YOUR INFORMATION</header>
          <header className="spacing ">5. GOOGLE ANALYTICS</header>
          <header className="spacing ">6. AUTHORIZED DISCLOSURES</header>
          <header className="spacing ">
            7. DATA PROCESSING IN THE UNITED STATES
          </header>
          <header className="spacing sectionHeader">
            8. QUESTIONS AND OPT IN/OUT
          </header>
        </div>
      </div>

      <div className="rightSection">
        <p>
          This Privacy Policy governs this website, operated by Parasol
          Laboratories Incorporated. By using the Site, you consent to the
          collection and use of your personal information as outlined in this
          Privacy Policy. If you have any questions, feel free to contact us
          at:&#160;
          <a href="mailto: info@parasollabs.org" className="textlink">
            info@parasollabs.org
          </a>
        </p>
        <div>
          <div>
            <header className="spacing">
              1. INFORMATION YOU CHOOSE TO SUBMIT
            </header>
            <p className="sectionText">
              Nulla a purus ante. Donec finibus vel mi eu vestibulum. Aliquam
              suscipit venenatis lacus id malesuada. Proin fringilla mattis
              sapien et suscipit. Phasellus rhoncus risus ac dui tempor tempor.
              Mauris et cursus lorem, non ultricies sem. Donec interdum nulla
              aliquam elementum condimentum. Sed accumsan odio a molestie
              mattis.
              <header className="spacing ">I. Lorem Ipsum</header>
              <p className="sectionText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                molestie risus sit amet augue egestas feugiat. Nulla interdum
                massa in leo rutrum condimentum. Duis quis eleifend urna. Fusce
                nec sodales est, at feugiat ex. Praesent at dolor non augue
                rhoncus efficitur. Vestibulum magna nunc, lacinia ut egestas ut,
                luctus quis nisi. Cras et ultrices erat, nec volutpat nulla. Nam
                orci enim, aliquam id sapien gravida, tristique molestie nulla.
                In varius, lorem a dictum suscipit, nibh dui fermentum arcu, sit
                amet aliquet magna tellus at libero. In ipsum orci, mollis a
                tellus nec, fermentum malesuada erat. Pellentesque eget faucibus
                magna. Aenean mollis lorem et turpis ultricies ultrices. Sed non
                semper eros. Pellentesque orci quam, lacinia ut luctus at,
                suscipit ac magna. Fusce sed lorem risus. Quisque id dictum
                metus.
              </p>
              <header className="spacing ">II. Lorem</header>
              <p className="sectionText">
                Nulla vel ipsum vel velit bibendum rutrum. Nullam ullamcorper
                lectus et lacus pellentesque accumsan. Phasellus convallis
                sapien dui, nec tempus ante dapibus vitae. Fusce consequat eu
                risus finibus malesuada. Phasellus molestie nibh quis cursus
                consectetur. Morbi congue sodales feugiat. In tempus turpis
                magna, vitae egestas metus aliquet eu. Ut malesuada rhoncus enim
                quis euismod. Quisque ipsum libero, gravida sit amet urna quis,
                rhoncus fringilla leo. Integer posuere justo ac diam iaculis,
                quis tempus massa scelerisque. In ut vestibulum enim. Integer
                facilisis erat libero, nec aliquet magna pretium a. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Donec molestie lectus commodo, condimentum
                tellus at, pulvinar massa. Etiam id orci orci.
              </p>
            </p>
          </div>
          <div>
            <header className="spacing ">2. INFORMATION WE COLLECT</header>
            <p className="sectionText">
              Nulla a purus ante. Donec finibus vel mi eu vestibulum. Aliquam
              suscipit venenatis lacus id malesuada. Proin fringilla mattis
              sapien et suscipit. Phasellus rhoncus risus ac dui tempor tempor.
              Mauris et cursus lorem, non ultricies sem. Donec interdum nulla
              aliquam elementum condimentum. Sed accumsan odio a molestie
              mattis.
              <header className="spacing">I. Lorem Ipsum</header>
              <p className="sectionText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                molestie risus sit amet augue egestas feugiat. Nulla interdum
                massa in leo rutrum condimentum. Duis quis eleifend urna. Fusce
                nec sodales est, at feugiat ex. Praesent at dolor non augue
                rhoncus efficitur. Vestibulum magna nunc, lacinia ut egestas ut,
                luctus quis nisi. Cras et ultrices erat, nec volutpat nulla. Nam
                orci enim, aliquam id sapien gravida, tristique molestie nulla.
                In varius, lorem a dictum suscipit, nibh dui fermentum arcu, sit
                amet aliquet magna tellus at libero. In ipsum orci, mollis a
                tellus nec, fermentum malesuada erat. Pellentesque eget faucibus
                magna. Aenean mollis lorem et turpis ultricies ultrices. Sed non
                semper eros. Pellentesque orci quam, lacinia ut luctus at,
                suscipit ac magna. Fusce sed lorem risus. Quisque id dictum
                metus.
              </p>
            </p>
          </div>
          <div>
            <header className="spacing ">3. HOW WE USE INFORMATION</header>
            <p className="sectionText">
              Nulla a purus ante. Donec finibus vel mi eu vestibulum. Aliquam
              suscipit venenatis lacus id malesuada. Proin fringilla mattis
              sapien et suscipit. Phasellus rhoncus risus ac dui tempor tempor.
              Mauris et cursus lorem, non ultricies sem. Donec interdum nulla
              aliquam elementum condimentum. Sed accumsan odio a molestie
              mattis.
              <header className="spacing">I. Lorem Ipsum</header>
              <p className="sectionText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                molestie risus sit amet augue egestas feugiat. Nulla interdum
                massa in leo rutrum condimentum. Duis quis eleifend urna. Fusce
                nec sodales est, at feugiat ex. Praesent at dolor non augue
                rhoncus efficitur. Vestibulum magna nunc, lacinia ut egestas ut,
                luctus quis nisi. Cras et ultrices erat, nec volutpat nulla. Nam
                orci enim, aliquam id sapien gravida, tristique molestie nulla.
                In varius, lorem a dictum suscipit, nibh dui fermentum arcu, sit
                amet aliquet magna tellus at libero. In ipsum orci, mollis a
                tellus nec, fermentum malesuada erat. Pellentesque eget faucibus
                magna. Aenean mollis lorem et turpis ultricies ultrices. Sed non
                semper eros. Pellentesque orci quam, lacinia ut luctus at,
                suscipit ac magna. Fusce sed lorem risus. Quisque id dictum
                metus.
              </p>
              <header className="spacing">II. Lorem</header>
              <p className="sectionText">
                Nulla vel ipsum vel velit bibendum rutrum. Nullam ullamcorper
                lectus et lacus pellentesque accumsan. Phasellus convallis
                sapien dui, nec tempus ante dapibus vitae. Fusce consequat eu
                risus finibus malesuada. Phasellus molestie nibh quis cursus
                consectetur. Morbi congue sodales feugiat. In tempus turpis
                magna, vitae egestas metus aliquet eu. Ut malesuada rhoncus enim
                quis euismod. Quisque ipsum libero, gravida sit amet urna quis,
                rhoncus fringilla leo. Integer posuere justo ac diam iaculis,
                quis tempus massa scelerisque. In ut vestibulum enim. Integer
                facilisis erat libero, nec aliquet magna pretium a. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Donec molestie lectus commodo, condimentum
                tellus at, pulvinar massa. Etiam id orci orci.
              </p>
            </p>
          </div>
          <div>
            <header className="spacing">
              4. HOW WE SHARE YOUR INFORMATION
            </header>
            <p className="sectionText">
              Nulla a purus ante. Donec finibus vel mi eu vestibulum. Aliquam
              suscipit venenatis lacus id malesuada. Proin fringilla mattis
              sapien et suscipit. Phasellus rhoncus risus ac dui tempor tempor.
              Mauris et cursus lorem, non ultricies sem. Donec interdum nulla
              aliquam elementum condimentum. Sed accumsan odio a molestie
              mattis.
              <header className="spacing">I. Lorem</header>
              <p className="sectionText">
                Nulla vel ipsum vel velit bibendum rutrum. Nullam ullamcorper
                lectus et lacus pellentesque accumsan. Phasellus convallis
                sapien dui, nec tempus ante dapibus vitae. Fusce consequat eu
                risus finibus malesuada. Phasellus molestie nibh quis cursus
                consectetur. Morbi congue sodales feugiat. In tempus turpis
                magna, vitae egestas metus aliquet eu. Ut malesuada rhoncus enim
                quis euismod. Quisque ipsum libero, gravida sit amet urna quis,
                rhoncus fringilla leo. Integer posuere justo ac diam iaculis,
                quis tempus massa scelerisque. In ut vestibulum enim. Integer
                facilisis erat libero, nec aliquet magna pretium a. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Donec molestie lectus commodo, condimentum
                tellus at, pulvinar massa. Etiam id orci orci.
              </p>
            </p>
          </div>
          <div>
            <header className="spacing">5. GOOGLE ANALYTICS</header>
            <p className="sectionText">
              Nulla a purus ante. Donec finibus vel mi eu vestibulum. Aliquam
              suscipit venenatis lacus id malesuada. Proin fringilla mattis
              sapien et suscipit. Phasellus rhoncus risus ac dui tempor tempor.
              Mauris et cursus lorem, non ultricies sem. Donec interdum nulla
              aliquam elementum condimentum. Sed accumsan odio a molestie
              mattis.
            </p>
          </div>
          <div>
            <header className="spacing">6. AUTHORIZED DISCLOSURES</header>
            <p className="sectionText">
              Nulla a purus ante. Donec finibus vel mi eu vestibulum. Aliquam
              suscipit venenatis lacus id malesuada. Proin fringilla mattis
              sapien et suscipit. Phasellus rhoncus risus ac dui tempor tempor.
              Mauris et cursus lorem, non ultricies sem. Donec interdum nulla
              aliquam elementum condimentum. Sed accumsan odio a molestie
              mattis. Quisque suscipit facilisis aliquet. Donec fermentum at ex
              nec imperdiet. Praesent orci lectus, semper eget tempus a, commodo
              eget urna. Proin ac nulla nulla. Praesent a accumsan justo. Nulla
              blandit neque libero, quis malesuada odio auctor quis. Phasellus
              nec pulvinar neque. Pellentesque finibus lorem risus, sed
              convallis nisl cursus ut. Curabitur interdum sapien urna, non
              suscipit nulla consequat eget. Curabitur porta felis nec velit
              vehicula, in dignissim nisi posuere. Phasellus condimentum, dolor
              nec rutrum consectetur, diam est ultrices arcu, vitae fermentum
              lorem urna vel sapien. Sed pulvinar pulvinar erat in dignissim.
            </p>
          </div>
          <div>
            <header className="spacing">
              7. DATA PROCESSING IN THE UNITED STATES
            </header>
            <p className="sectionText">
              Quisque suscipit facilisis aliquet. Donec fermentum at ex nec
              imperdiet. Praesent orci lectus, semper eget tempus a, commodo
              eget urna. Proin ac nulla nulla. Praesent a accumsan justo. Nulla
              blandit neque libero, quis malesuada odio auctor quis. Phasellus
              nec pulvinar neque. Pellentesque finibus lorem risus, sed
              convallis nisl cursus ut. Curabitur interdum sapien urna, non
              suscipit nulla consequat eget. Curabitur porta felis nec velit
              vehicula, in dignissim nisi posuere. Phasellus condimentum, dolor
              nec rutrum consectetur, diam est ultrices arcu, vitae fermentum
              lorem urna vel sapien. Sed pulvinar pulvinar erat in dignissim.
            </p>
          </div>
          <div>
            <header className="spacing">8. QUESTIONS AND OPT IN/OUT</header>
            <p className="sectionText">
              Nulla a purus ante. Donec finibus vel mi eu vestibulum. Aliquam
              suscipit venenatis lacus id malesuada. Proin fringilla mattis
              sapien et suscipit. Phasellus rhoncus risus ac dui tempor tempor.
              Mauris et cursus lorem, non ultricies sem. Donec interdum nulla
              aliquam elementum condimentum. Sed accumsan odio a molestie
              mattis. Quisque suscipit facilisis aliquet. Donec fermentum at ex
              nec imperdiet. Praesent orci lectus, semper eget tempus a, commodo
              eget urna. Proin ac nulla nulla. Praesent a accumsan justo. Nulla
              blandit neque libero, quis malesuada odio auctor quis. Phasellus
              nec pulvinar neque. Pellentesque finibus lorem risus, sed
              convallis nisl cursus ut. Curabitur interdum sapien urna, non
              suscipit nulla consequat eget. Curabitur porta felis nec velit
              vehicula, in dignissim nisi posuere. Phasellus condimentum, dolor
              nec rutrum consectetur, diam est ultrices arcu, vitae fermentum
              lorem urna vel sapien. Sed pulvinar pulvinar erat in dignissim.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PrivacyPage;
