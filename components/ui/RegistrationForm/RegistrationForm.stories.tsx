import React from "react";
import { Story, Meta } from "@storybook/react";
import RegistrationForm from "./RegistrationForm";
import { http, HttpResponse } from "msw"; // Replace 'msw' with the correct source if needed

// Define Storybook metadata
export default {
  title: "Forms/RegistrationForm",
  component: RegistrationForm,
} as Meta<typeof RegistrationForm>;

// Define a template for stories
const Template: Story<typeof RegistrationForm> = (args) => (
  <RegistrationForm {...args} />
);

// Default story
export const Default = Template.bind({});

// Story for successful response
export const SuccessResponse = Template.bind({});
SuccessResponse.parameters = {
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
};

// Story for error response
export const ErrorResponse = Template.bind({});
ErrorResponse.parameters = {
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
};
