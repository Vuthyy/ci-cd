import { Meta, StoryObj } from "@storybook/react";
import RegistrationForm from "./RegistrationForm";
import { http, HttpResponse } from "msw"; // Adjust the import path as needed

// Define Storybook metadata
const meta: Meta<typeof RegistrationForm> = {
  title: "Forms/RegistrationForm",
  component: RegistrationForm,
};
export default meta;

// Default story
export const Default: StoryObj<typeof RegistrationForm> = {};

// Story for successful response
export const SuccessResponse: StoryObj<typeof RegistrationForm> = {
  parameters: {
    msw: {
      handlers: [
        http.post("/api/register", (req, res, ctx) => {
          return new HttpResponse(
            ctx.json({ message: "Registration successful" }),
            { status: 200 }
          );
        }),
      ],
    },
  },
};

// Story for error response
export const ErrorResponse: StoryObj<typeof RegistrationForm> = {
  parameters: {
    msw: {
      handlers: [
        http.post("/api/register", (req, res, ctx) => {
          return new HttpResponse(
            ctx.json({ error: "All fields are required" }),
            { status: 400 }
          );
        }),
      ],
    },
  },
};
