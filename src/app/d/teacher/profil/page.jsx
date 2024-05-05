import ProfileForm from "./_components/ProfileForm";
import ProfileFiles from "./_components/ProfileFiles";

export default function page() {
  return (
    <div>
      <div className="w-fit max-w-full p-8 bg-white rounded-xl flex flex-wrap">
        <ProfileForm />
        <ProfileFiles />
      </div>
    </div>
  );
}
