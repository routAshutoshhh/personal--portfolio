import { FaEnvelope, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";

export const metadata = {
  title: "Ashutosh | Contact",
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h3 className="text-4xl font-bold tracking-tight">Contact</h3>
      <p className="text-muted-foreground text-lg mt-1">Let&apos;s connect.</p>
      <p className="mt-4 text-sm text-muted-foreground">
        Connect with me through any of these platforms.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg">
          <FaEnvelope className="w-5 h-5 mt-1 text-muted-foreground" />
          <div>
            <p className="font-medium text-sm">Email</p>
            <a
              href="mailto:egoisticdev@gmail.com"
              className="text-muted-foreground text-sm"
            >
              egoisticdev@gmail.com
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg">
          <FaInstagram className="w-5 h-5 mt-1 text-muted-foreground" />
          <div>
            <p className="font-medium text-sm">Instagram</p>
            <a
              href="https://instagram.com/geekgoes.gym"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm"
            >
              @geekgoes.gym
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg">
          <FaLinkedin className="w-5 h-5 mt-1 text-muted-foreground" />
          <div>
            <p className="font-medium text-sm">LinkedIn</p>
            <a
              href="https://linkedin.com/in/ashutoshkrout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm"
            >
              in/ashutoshkrout
            </a>
          </div>
        </div>

        {/* Discord */}
        <div className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg">
          <FaDiscord className="w-5 h-5 mt-1 text-muted-foreground" />
          <div>
            <p className="font-medium text-sm">Discord</p>
            <p className="text-muted-foreground text-sm">Join Server</p>
          </div>
        </div>
      </div>
    </div>
  );
}
