import Link from "next/link";
import ChatIcon from "@/icon/chat-icon";
import GithubIcon from "@/icon/github-icon";

export default function SocialLogin() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Link
          className="btn-primary h-10 flex items-center justify-center gap-3"
          href="/github/start"
        >
          <span>
            <GithubIcon />
          </span>
          <span>Continue with Github</span>
        </Link>
        <Link
          className="btn-primary h-10 flex items-center justify-center gap-3"
          href="/sms"
        >
          <span>
            <ChatIcon />
          </span>
          <span>Continue with SMS</span>
        </Link>
      </div>
    </>
  );
}
