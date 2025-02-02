import FormInput from "@/components/input";
import FormButton from "@/components/button";

export default function SmsLogin() {
  return (
    <div className="flex flex-col gap-10 p-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Enter your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="tel"
          placeholder="Phone Number"
          required={true}
          errors={[]}
        />
        <FormInput
          type="text"
          placeholder="Verification Code"
          required={true}
          errors={[]}
        />
        <FormButton text="Verify" loading={false} />
      </form>
    </div>
  );
}
