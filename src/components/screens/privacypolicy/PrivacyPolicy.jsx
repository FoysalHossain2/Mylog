import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='container_fluid'>
      <div className='lg:py-64 py-48'>

      <div className="absolute z-[-1] w-[50%] h-[50%] lg:right-[86%] right-[46%] rounded-full blue__gradient lg:bottom-[290px] bottom-[230px] " />
      {/* header */}
        <h2 className='text-[40px] lg:text-[80px] font-normal text-[#F0F7FE#F0F7FE] leading-[100%]'>
          Privacy Policy
        </h2>
        <p className='mt-8 text-base font-normal text-[#F0F7FEB8] leading-[140%]'>
          Last updated 6 August, 2024
        </p>
      </div>

      <div className="pb-10">
        {/* Introduction Section */}
        <h2 className="privacyHtag">
          Introduction
        </h2>
        <p className="privacyPtag mt-2 w-full sm:w-full  lg:max-w-[814px] md:max-w-[814px]">
          Welcome to Log-U's Privacy Policy. Your privacy is critically important to us.
          This policy explains how we collect, use, and disclose your personal information,
          and your rights regarding this information.
        </p>

        <hr className="border-[#1F3A6E] my-8" />

        {/* Information We Collect Section */}
        <h2 className="privacyHtag">
          Information We Collect
        </h2>
        <p className="privacyPtag mt-2">
          We collect various types of information in connection with the services we
          provide, including:
        </p>

        {/* Personal Information */}
        <h3 className="privacyHtag mt-6">Personal Information</h3>
        <ul className="privacyPtag space-y-2 list-disc list-inside">
          <li>
            Contact Information: Your name, email address, phone number,
            and other contact details.
          </li>
          <li>
            Account Information: Information related to your account, such
            as username and password.
          </li>
        </ul>

        {/* Usage Data */}
        <h3 className="privacyPtag ">Usage Data</h3>
        <ul className="privacyPtag list-disc list-inside space-y-2">
          <li>
            Analytics Data: Information about your use of our website,
            collected via Google Analytics and similar tracking tools.
          </li>
          <li>
            Technical Data: IP address, browser type, operating system,
            referring URLs, and other technical data.
          </li>
        </ul>

        {/* Cookies and Tracking Technologies */}
        <h3 className="privacyHtag mt-6">Cookies and Tracking Technologies</h3>
        <p className="privacyPtag mt-1 w-full sm:w-full lg:max-w-[775px] md:max-w-[775px]">
          We use cookies and similar tracking technologies to track activity on our
          website and store certain information. The technologies we use include:
        </p>

        <ul className="privacyPtag list-disc list-inside space-y-2 mt-6">
          <li>
            Cookies: Small files stored on your device. You can instruct
            your browser to refuse all cookies or to indicate when a cookie is being set.
            However, some parts of our service may not function properly without cookies.
          </li>
          <li>
            Web Beacons: Small electronic files used in our website and
            emails to monitor usage and engagement.
          </li>
        </ul>

        <hr className="border-[#1F3A6E] my-8" />

        {/* How We Use Your Information */}
        <h2 className="privacyHtag">
         How We Use Your Information
        </h2>
        <p className='privacyPtag mt-8'>We use the information we collect in the following ways:</p>
        <ul className="privacyPtag space-y-2 list-disc list-inside">
          <li>
            To provide and maintain our services, including monitoring usage.
          </li>
          <li>
            To manage user accounts and provide customer support.
          </li>
          <li>
           To analyze website performance using tools like Google Analytics.
          </li>
          <li>
           To improve our marketing strategies by delivering relevant advertisements.
          </li>
          <li>
           To comply with legal obligations.
          </li>
        </ul>

        <hr className="border-[#1F3A6E] my-8" />

        {/* Sharing Your Information */}
        <h2 className="privacyHtag">
           Sharing Your Information
        </h2>
        <p className='privacyPtag mt-8'>We may share your information with third parties only as described in this Privacy Policy, including:</p>
        <ul className="privacyPtag space-y-2 list-disc list-inside">
          <li>
            Service Providers: Third-party providers that assist in analytics, advertising, and hosting services.
          </li>
          <li>
            Compliance with Laws: When required by law or in response to legal requests.
          </li>
        </ul>

        <hr className="border-[#1F3A6E] my-8" />

        {/* Third-Party Services */}
        <h2 className="privacyHtag">
          Third-Party Services
        </h2>
        <p className='privacyPtag mt-8'>We use third-party services to enhance our website's functionality, including:</p>
        <ul className="privacyPtag space-y-2 list-disc list-inside">
          <li>
          Google Analytics: For website traffic analysis.
          </li>
          <li>
           Facebook Pixel: For tracking conversions and user interactions.s.
          </li>
          <li>
          AWS, Azure, and GCP: For cloud hosting and infrastructure support.
          </li>
          <li>
            Calendly: For appointment scheduling.
          </li>
        </ul>

      
        <hr className="border-[#1F3A6E] my-8" />

           {/* Your Data Protection Rights */}
          <h2 className="privacyHtag">
            Your Data Protection Rights
          </h2>
          <p className='privacyPtag mt-8'>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul className="privacyPtag space-y-2 list-disc list-inside">
          <li>
            Right to Access: You have the right to request copies of your personal data.
          </li>
          <li>
           Right to Rectification: You have the right to request corrections to any inaccurate or incomplete information.
          </li>
          <li>
            Right to Erasure: You have the right to request that we delete your personal data, under certain conditions.
          </li>
          <li>
            Right to Object: You can object to our processing of your personal data for marketing purposes.
          </li>
        </ul>


      </div>
    </div>
  )
}

export default PrivacyPolicy