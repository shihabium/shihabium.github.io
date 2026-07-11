import TextInput from "./TextInput";

type Props = {
  github: string;
  linkedin: string;
  facebook: string;

  onGithub: (value: string) => void;
  onLinkedin: (value: string) => void;
  onFacebook: (value: string) => void;
};

export default function SocialInput({
  github,
  linkedin,
  facebook,
  onGithub,
  onLinkedin,
  onFacebook,
}: Props) {
  return (
    <div className="space-y-5">

      <TextInput
        label="GitHub URL"
        value={github}
        onChange={onGithub}
      />

      <TextInput
        label="LinkedIn URL"
        value={linkedin}
        onChange={onLinkedin}
      />

      <TextInput
        label="Facebook URL"
        value={facebook}
        onChange={onFacebook}
      />

    </div>
  );
}