
"use client";

import {
  useState,
  type JSX,
  type ChangeEvent,
} from "react";
import { useRouter } from "next/navigation";
import {
  useOnboarding,
  type FormData,
} from "../OnboardingContext";

import {
  ActionBtn,
  BackBtn,
  FieldGroup,
  SectionHeading,
  StyledSelect,
} from "../shared-components";

const familyStatusOptions: string[] = [
  "Middle Class",
  "Upper Middle Class",
  "Rich / Affluent",
  "Traditional Family",
  "Modern Family",
];

type FormKey = keyof Pick<
  FormData,
  "familyStatus" | "aboutYourself"
>;

export default function AdditionalDetailsPage(): JSX.Element {
  const router = useRouter();

  const { formData, setFormData } = useOnboarding();

  const [submitted, setSubmitted] =
    useState<boolean>(false);

  const setField =
    (key: FormKey) =>
    (value: string): void => {
      setFormData((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

  const handleSubmit = (): void => {
    setSubmitted(true);

    window.setTimeout((): void => {
      router.push("/success-onboarding");
    }, 1500);
  };

  // if (submitted) {
  //   return (
  //     <div className="flex flex-col items-center justify-center py-16 text-center">
  //       <div
  //         className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
  //         style={{
  //           background:
  //             "linear-gradient(135deg,#c0174c,#8b0f38)",
  //         }}
  //       >
  //         <svg
  //           viewBox="0 0 24 24"
  //           fill="none"
  //           stroke="white"
  //           strokeWidth={2.5}
  //           className="w-10 h-10"
  //         >
  //           <path d="M5 13l4 4L19 7" />
  //         </svg>
  //       </div>

  //       <h2 className="text-2xl font-black text-gray-900 mb-2">
  //         Registration Complete!
  //       </h2>

  //       <p className="text-sm text-gray-500">
  //         Redirecting you to your profile...
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="space-y-6 h-110 px-2">
      <SectionHeading
        title="Additional Details"
        subtitle="Tell us a little more about your family and yourself."
      />

      {/* Family Status */}
      <FieldGroup label="Family Status">
        <StyledSelect
          label="Family Status"
          value={formData.familyStatus}
          onChange={setField("familyStatus")}
          options={familyStatusOptions}
          placeholder="Select family status"
        />
      </FieldGroup>

      {/* About Yourself */}
      <FieldGroup label="About Yourself" isHeight="h-44">
        <textarea
          rows={6}
          placeholder="Write something about yourself..."
          value={formData.aboutYourself}
          onChange={(
            e: ChangeEvent<HTMLTextAreaElement>
          ): void =>
            setField("aboutYourself")(
              e.target.value
            )
          }
          className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-sm outline-none resize-none focus:border-[#c0174c]"
        />
      </FieldGroup>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <BackBtn
          onClick={(): void =>
            router.push(
              "/onboarding/location-professional-details"
            )
          }
        />

        <div className="flex-1">
          <ActionBtn
            onClick={handleSubmit}
            label="Complete Registration"
          />
        </div>
      </div>
    </div>
  );
}