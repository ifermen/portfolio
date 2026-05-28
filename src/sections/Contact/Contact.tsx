import { useDataContext } from "../../contexts/DataContext";
import linkedIn from "../../assets/icon/linkedin-accent-light.svg";
import email from "../../assets/icon/email-text.svg";
import phone from "../../assets/icon/phone-accent-light.svg";

export function Contact() {
  const { contact } = useDataContext();

  return (
    <section className="flex flex-col gap-5 p-5">
      <h2 className="font-mono text-accent-light" id="contact">// 04 contacto</h2>
      <h3 className="sm:text-3xl text-xl">Contactame</h3>
      {contact.text.map((p) => (
        <p className="text-text-muted sm:text-md text-sm text-justify">{p}</p>
      ))}
      <div className="flex flex-col sm:flex-row gap-4">
        <a href={`mailto:${contact.email}`}>
          <button className="bg-accent py-2 px-6 rounded-lg flex flex-row gap-1 items-center justify-center transition-all duration-200 hover:bg-accent/80 hover:-translate-y-0.5 active:translate-y-0 active:bg-accent/70 cursor-pointer text-xs sm:text-md w-full sm:w-fit">
            <img src={email} className="h-full w-5" />
            {contact.email}
          </button>
        </a>
        <a href={contact.linkedin}>
          <button className="border border-accent-light/30 py-2 px-6 rounded-lg text-accent-light flex flex-row items-center justify-center gap-1 transition-all duration-200 hover:bg-accent/10 hover:border-accent-light/50 hover:-translate-y-0.5 active:translate-y-0 active:bg-accent/5 cursor-pointer text-sm sm:text-md w-full sm:w-fit">
            <img src={linkedIn} className="h-full w-5" />
            LinkedIn
          </button>
        </a>
        <div className="border border-accent-light/30 py-2 px-6 rounded-lg text-accent-light flex flex-row items-center justify-center gap-2 text-sm sm:text-md">
          <img src={phone} className="h-full w-5" />
          {contact.phone}
        </div>
      </div>
    </section>
  );
}
