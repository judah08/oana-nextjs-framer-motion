import Image from "next/image";

export default function Footer() {
  return (
    <main className="p-5 md:px-16 md:pt-24 border-t-[#ebebeb] border-t-2">
      <div className="flex flex-col md:flex-row justify-between md:pb-16">
        <div className="my-5 md:my-0">
          <Image src="/logo.svg" alt="Logo" width={200} height={50} />
          <div className="py-3 md:p-3">
            <a href="/">Treatments</a>
          </div>
          <div className="py-3 md:p-3">
            <a href="/">Blog</a>
          </div>
          <div className="py-3 md:p-3">
            <a href="/">FAQ</a>
          </div>
        </div>
        <div className="my-5 md:my-0">
          <h2 className="font-bold text-base mb-8">Contact</h2>
          <p className="mb-4 text-sm">support@oanahealth.com</p>
          <div className="text-sm">
            Oana Health HQ
            <br />
            2021 Fillmore Street
            <br />
            PMB #1373
            <br />
            San Francisco, CA <br />
            94115-2708
          </div>
        </div>
        <div className="my-5 md:my-0">
          <img src="/seal.png" alt="seal" />
        </div>
        <div className="my-5 md:my-0">
          <p className="word-wrap md:w-[300px] text-sm italic text-[#505050]">
            Disclaimer: Oana-affiliated medical practices are online practices
            that help PCOS sufferers achieve symptom relief. Oana-affiliated
            medical practices are independently owned and operated by licensed
            physicians who provide services using the Oana telehealth platform.
            Oana is not a pharmacy, and Oana is not financially affiliated with
            a pharmacy or any pharmaceutical company.
          </p>
        </div>
      </div>
      <div className=" pt-16 border-t-[#ebebeb] border-t-2">
        <div className="md:float-right flex flex-col md:flex-row">
          <div className="flex">
            <a href="/" className="p-3">
              <Image
                src="/facebook-icon.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="/" className="p-3">
              <Image src="/IG-icon.svg" alt="Facebook" width={30} height={30} />
            </a>
            <a href="/" className="p-3">
              <Image
                src="/Pinterest-icon.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
          </div>
          <div className="flex">
            <a href="/" className="p-3">
              <Image src="/YT-icon.svg" alt="Facebook" width={30} height={30} />
            </a>
            <a href="/" className="p-3">
              <Image
                src="/Tiktok-icon.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
        <div className="md:float-left flex flex-col md:flex-row">
          <a href="/" className="p-3 underline">
            Privacy Policy
          </a>
          <a href="/" className="p-3 underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </main>
  );
}
