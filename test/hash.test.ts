// written by Samuel Lehman

import { saltAndHash } from "./../utils/hash";
import React from "react";

test("saltAndHash", async () => {
  const password = "test";
  const hashedPassword = await saltAndHash(password);

  expect(hashedPassword).not.toBe(password);
});
