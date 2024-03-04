//Used to test ReSend API call - Should expect error since im using a domain not accepted from their api

import { SendEmail } from "../app/api/email/contact";

test("emailFail", async () => {
  const succeed = await SendEmail({
    from: "",
    subject: "hi",
    html: "test",
  });
  expect(succeed).toBe(false);
});
