import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "lucide-react";

function Faqs() {
  const faqs = [
    {
      question: "What are biodegradable products?",
      answer:
        "Biodegradable products are materials that can break down naturally by microorganisms over time, reducing environmental pollution.",
    },
    {
      question: "How long do your eco bags take to decompose?",
      answer:
        "Our eco-friendly bags typically decompose within 30 to 60 days under composting conditions.",
    },
    {
      question: "Are your packaging materials plastic-free?",
      answer:
        "Yes — we use fully compostable and plastic-free materials for all our packaging to support a zero-waste lifestyle.",
    },
    {
      question: "Can I order custom biodegradable packaging?",
      answer:
        "Absolutely! We offer custom eco-friendly packaging solutions for businesses and events. Get in touch via our Contact page.",
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-green-50  to-green-100">
      <div className="max-w-4xl mx-auto py-16 px-6 ">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Disclosure.Button className="flex justify-between items-center w-full px-5 py-4 text-left text-lg font-medium text-gray-800 bg-white hover:bg-green-50 transition">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`w-5 h-5 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-5 py-4 bg-gray-50 text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
