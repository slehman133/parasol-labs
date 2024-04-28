"use client";
import React, { useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Image,
} from "@nextui-org/react";
import "./partnershipformstyles.css";
export default function PartnershipFormPage() {
  const [selected, setSelected] = useState([""]);
  const [formData, setFormData] = useState({
    companyName: "",
    companyWebpage: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    stateOrProvince: "",
    postalCode: "",
    services: [""],
    additionalInfo: "",
    contactName: "",
    phoneNumber: "",
    emailAddress: "",
  });
  const [sending, setSending] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const validateEmail = (emailAddress: string) =>
    emailAddress.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z ]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (formData.emailAddress === "") return false;

    return validateEmail(formData.emailAddress) ? false : true;
  }, [formData.emailAddress]);

  const validatePhoneNumber = (phoneNumber: string) =>
    phoneNumber.match(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
  
  const isInvalidPhone = React.useMemo(() => {
    if (formData.phoneNumber === "") return false;

    return validatePhoneNumber(formData.phoneNumber) ? false : true;
  }, [formData.phoneNumber]);

  const clearForm = () => {
    setFormData({
      companyName: "",
      companyWebpage: "",
      streetAddress: "",
      streetAddress2: "",
      city: "",
      stateOrProvince: "",
      postalCode: "",
      services: [""],
      additionalInfo: "",
      contactName: "",
      phoneNumber: "",
      emailAddress: "",
    });
    setSelected([""]);
  };

  //Potentially could do, if the person of contact has an account, we could store the partnership form in the account's dashboard
  //Create a handler for the submit button to push the form data to the database
  const handleSubmitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSending(true);

    //Filter out null or empty strings from selected services
    formData.services = selected.filter((service) => service !== "");
    console.log(formData.services);
    try {
      //Check if any of the required fields are empty
      if (
        !formData.companyName ||
        !formData.streetAddress ||
        !formData.city ||
        !formData.stateOrProvince ||
        !formData.postalCode ||
        !formData.contactName ||
        !formData.phoneNumber ||
        !formData.emailAddress
      ) {
        setMessage("Please fill out all required fields.");
        setSending(false);
        return;
      }
      await fetch("/api/webforms/partnershipform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setMessage("Form submitted successfully!");
      clearForm();
      setSending(false);
    } catch (error) {
      setSending(false);
      console.error(error);
      setMessage(
        "There was an error submitting the form. Please try again later."
      );
    }
  };

  return (
    <div className="p-4 md:p-10 container mx-auto">
      <div className="border-1 p-4 md:p-10 rounded-md shadow-lg mx-auto my-auto md:grid md:grid-cols-2 md:gap-5">
        <div className="text-left space-y-4">
          <h3 className="font-bold text-xl md:text-3xl">
            Let&apos;s build a better tomorrow.
          </h3>
          <p className="font-light">
            We want to grow with our community. Fill out the form and our
            partnership manager will reach out as soon as possible.
          </p>
          <Image
            src="/images/logo.png"
            alt="Parasol Laboratories Logo"
            className="h-auto w-1/4 mx-auto pt-12 md:mb-5"
          />
        </div>
        <div className="">
          <h1 className="text-center font-bold text-2xl border-b-1 border-foreground">
            Partnership Form
          </h1>
          <div className="py-5 grid grid-cols-2 gap-4">
            <Input
              label="Company Name"
              labelPlacement="outside"
              variant="bordered"
              fullWidth
              radius="none"
              size="lg"
              isRequired={true}  
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
            <Input
              label="Company Webpage"
              labelPlacement="outside"
              variant="bordered"
              fullWidth
              radius="none"
              size="lg"
              value={formData.companyWebpage}
              onChange={(e) =>
                setFormData({ ...formData, companyWebpage: e.target.value })
              }
            />
          </div>
          <h1 className="font-bold after:content-['*'] after:text-danger">Company Address</h1>
          <Input
            variant="bordered"
            fullWidth
            radius="none"
            size="lg"
            placeholder="Street Address"
            isRequired
            className="py-2"
            value={formData.streetAddress}
            onChange={(e) =>
              setFormData({ ...formData, streetAddress: e.target.value })
            }
          />
          <Input
            variant="bordered"
            fullWidth
            radius="none"
            size="lg"
            placeholder="Street Address Line 2 (optional)"
            className="py-2"
            value={formData.streetAddress2}
            onChange={(e) =>
              setFormData({ ...formData, streetAddress2: e.target.value })
            }
          />
          <div className="grid grid-cols-2 grid-gap-4 gap-4 py-5">
            <Input
              variant="bordered"
              fullWidth
              radius="none"
              size="lg"
              placeholder="City"
              isRequired
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            <Input
              variant="bordered"
              fullWidth
              radius="none"
              size="lg"
              placeholder="State / Province"
              isRequired
              value={formData.stateOrProvince}
              onChange={(e) =>
                setFormData({ ...formData, stateOrProvince: e.target.value })
              }
            />
          </div>
          <Input
            variant="bordered"
            fullWidth
            radius="none"
            size="lg"
            placeholder="Postal / Zip Code"
            isRequired
            value={formData.postalCode}
            onChange={(e) =>
              setFormData({ ...formData, postalCode: e.target.value })
            }
          />
          <h1 className="py-4 font-bold after:content-['*']  after:text-danger">
            Services you&apos;re interested in (can select multiple)
          </h1>
          <CheckboxGroup
            value={selected}
            onValueChange={setSelected}
            color="warning"
            className="p-2"
            isRequired
          >
            <Checkbox value="Website Optimization ">
              Website Optimization
            </Checkbox>
            <Checkbox value="Social Media">Social Media</Checkbox>
            <Checkbox value="Media Advertisement">Media Advertisement</Checkbox>
            <Checkbox value="Marketing">Email/Mobile Marketing</Checkbox>
            <Checkbox value="Workshop">Trade show/Workshop</Checkbox>
            <Checkbox value="SEO">Paid Search / SEO</Checkbox>
            <Checkbox value="Other">Other</Checkbox>
          </CheckboxGroup>
          <h1 className="py-4 font-bold">Additional information</h1>
          <Textarea
            variant="bordered"
            fullWidth
            color="primary"
            size="lg"
            radius="none"
            placeholder="Type here..."
            value={formData.additionalInfo}
            onChange={(e) =>
              setFormData({ ...formData, additionalInfo: e.target.value })
            }
          />
          <h1 className="font-bold pt-4 after:content-['*']  after:text-danger">Point of Contact - Partnership</h1>
          <Input
            label="Contact Name"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="none"
            value={formData.contactName}
            onChange={(e) =>
              setFormData({ ...formData, contactName: e.target.value })
            }
          />
          <Input
            className="py-2"
            isRequired
            variant="bordered"
            placeholder="Phone Number"
            size="lg"
            radius="none"
            value={formData.phoneNumber}
            color={isInvalidPhone ? "danger" : "success"}
            errorMessage={isInvalidPhone && "Please enter a valid phone number"}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
          <Input
            variant="bordered"
            size="lg"
            placeholder="From: name@example.com"
            radius="none"
            isRequired
            value={formData.emailAddress}
            color={isInvalid ? "danger" : "success"}
            errorMessage={isInvalid && "Please enter a valid email"}
            onChange={(e) =>
              setFormData({ ...formData, emailAddress: e.target.value })
            }
          />
          <div className="pt-5 w-full mx-auto grid grid-cols-2 gap-4">
            <Button disabled={sending} onClick={handleSubmitForm}>
              Submit
            </Button>
            <p className="py-2 mx-auto">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
