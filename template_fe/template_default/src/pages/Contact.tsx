import { useEffect, useState } from "react";
import customFetch from "../axios/custom";

interface Company {
  name: string;
  address: string;
  hotline: string;
  email: string;
  google_map_embed: string;
  description: string;
  footer_text: string;
}

const Contact = () => {
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await customFetch.get("/company");
        setCompany(response.data);
      } catch (error) {
        console.error("Failed to fetch company info", error);
      }
    };
    fetchCompany();
  }, []);

  if (!company) {
    return <div className="max-w-screen-2xl mx-auto px-5 mt-24">Loading...</div>;
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-5 mt-24 flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      {company.description && <p>{company.description}</p>}
      <div>
        <h2 className="text-xl font-semibold">Address</h2>
        <p>{company.address}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Email</h2>
        <p>{company.email}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Hotline</h2>
        <p>{company.hotline}</p>
      </div>
      {company.google_map_embed && (
        <div dangerouslySetInnerHTML={{ __html: company.google_map_embed }} />
      )}
    </div>
  );
};

export default Contact;
