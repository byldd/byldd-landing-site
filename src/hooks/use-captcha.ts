"use client";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export function useCaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getCaptchaToken = async (action: string) => {
    if (!executeRecaptcha) {
      throw new Error("reCAPTCHA is not ready");
    }

    const token = await executeRecaptcha(action);

    return token;
  };

  return {
    getCaptchaToken,
  };
}