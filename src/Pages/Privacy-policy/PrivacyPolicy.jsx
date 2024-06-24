import React,{useState,useEffect} from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaChevronUp } from "react-icons/fa";
const PrivacyPolicy = () => {
  const [isVisible,setIsVisible]=useState(false)
  const toggleVisibility=()=>{
    if(window.pageYOffset>500||window.scrollY>500){
      setIsVisible(true)
    }
    else{
      setIsVisible(false)
    }
  }
  const scrollToTop=()=>{
    window.scrollTo({
      top:'0',
      behaviour:'smooth'
    });
  }

useEffect(() => {
  window.addEventListener('scroll', toggleVisibility);
  return () => {
      window.removeEventListener('scroll', toggleVisibility);
  };
}, []);
  return (
    <>
      <Box
        pt="50px"
        pl={{ base: "50px", md: "100px", lg: "300px", xl: "400px" }}
        pr={{ base: "50px", md: "100px", lg: "300px", xl: "400px" }}
        style={{
          textAlign: "justify",
          textJustify: "inter-word",
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: "1.5rem",
          fontSize:'16px',
        }}
      >
        {isVisible && (
        <Box position="fixed" bottom='120px' right='0px' w='45px' h='45px' bg="#FBD918" borderTopLeftRadius='10px' borderBottomLeftRadius='10px'
        style={{transition:'all 0.5s ease-out'}}><FaChevronUp style={{color:'white',fontSize:'30px',margin:'auto',paddingTop:'15px'}} onClick={scrollToTop}/>
        </Box>
        )}
        <Box as="privacy-policy">
          <span
            style={{
              fontSize: "56px",
              color: "#525252",
              fontWeight: "700",
              fontFamily: "Abel",
            }}
          >
            PRIVACY POLICY
          </span>
          <br/><br/>
          <Text>
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;FOLK&#41;
            </span>{" "}
            recognises the importance of maintaining your privacy. We value your
            privacy and appreciate your trust in us. This Privacy Policy sets
            out how{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;FOLK&#41;{" "}
            </span>
            uses and protects any information that you give
            <span style={{ color: "black", fontWeight: "bold" }}>
              {" "}
              ISKCON Bangalore &#40;FOLK&#41;
            </span>{" "}
            when you use this{" "}
            <a
              href="https://folknet.in"
              style={{ color: "#FBD918", textDecoration: "none" }}
            >
            https://folknet.in {" "}
            </a>{" "}
            or the
            <span style={{ color: "black", fontWeight: "bold" }}>
              {" "}
              ISKCON Bangalore &#40;FOLK&#41;
            </span>{" "}
            mobile application or any other digital medium and other offline
            sources of our Company.
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;FOLK&#41;
            </span>{" "}
            is committed to ensure that your privacy is protected. Should we ask
            you to provide certain information by which you can be identified
            when using this website, then you can be assured that it will only
            be used in accordance with this Privacy Policy as it describes how
            we treat user information we collect from you, the policies and
            procedures on the collection, use, disclosure and protection of your
            information when you use our {" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;FOLK&#41;{" "}
            </span>
            Platform.
          </Text>
           <br/>
          <Text>
            This Privacy Policy applies to current and former visitors to our{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;FOLK&#41;
            </span>{" "}
            Platform and to our online customers. By visiting and&#47;or using our
            website, you agree to this Privacy Policy.
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;FOLK&#41;
            </span>{" "}
            may change this policy from time to time by updating this page. You
            should check this page from time to time to ensure that you are
            happy with any changes.
          </Text>
          <br />
          <Text>
            <a
              href="https://folknet.in"
              style={{ color: "#FBD918", textDecoration: "none" }}
            >
              https://folknet.in /FOLK APP
            </a>{" "}
            is a property of{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;FOLK&#41;
            </span>
            , NonProfit, established under laws of India, having its registered
            office at{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;Non-Profit&#41;
            </span>{"  "}
            Hare Krishna Hill,Chord Road,
            <address>Rajajinagar,Bengaluru 560010,</address>
          </Text>
        </Box>
        <br />
        <Box as="definition">
          <span
            style={{ fontFamily: "Abel", fontWeight: "700", fontSize: "30px" }}
          >
            DEFINITIONS:
          </span>
          <Text>
          <br />
            The terms &ldquo;FOLK&rdquo;,
            &ldquo;Company&rdquo;,&ldquo;we&rdquo;,&ldquo;us&rdquo; and
            &ldquo;our&rdquo; refer to the {" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;FOLK&#41;
            </span>
            .The term {" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              &ldquo;ISKCON Bangalore &#40;FOLK&#41;
            </span>{" "}
             Platform&rdquo; refers to{" "}
            <a
              href="https://folknet.in"
              style={{ color: "#FBD918", textDecoration: "none" }}
            >
              https://folknet.in
            </a>{" "}
            or the{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;FOLK&#41;
            </span>{" "}
            mobile application or any other digital medium and other offline
            sources.
          </Text>
          <br/>
          <Text>
            The terms &ldquo;you&rdquo; and &ldquo;your&rdquo; refer to the user
            of the {" "}
            <a
              href="https://folknet.in"
              style={{ color: "#FBD918", textDecoration: "none" }}
            >
              https://folknet.in .
            </a>
          </Text>
          <br/>
          <Text>
            The term &ldquo;Group&rdquo; means, with respect to any person, any
            entity that is controlled by such person, or any entity that
            controls such person, or any entity that is under common control
            with such person, whether directly or indirectly, or, in the case of
            a natural person, any Relative &#40;as such term is defined in the
            Companies Act, <time>1956</time> and Companies Act,{" "}
            <time>2013</time> to the extent applicable&#41; of such person.
          </Text>
          <br/>
          <Text>The term &ldquo;Policy&rdquo; refers to this Privacy Policy.</Text>
          <br/>
          <Text>
            Please read this Policy before using the{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;FOLK&#41;
            </span>
            Platform or submitting any personal information to{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              ISKCON Bangalore &#40;FOLK&#41;
            </span>
            . This Policy is a part of and incorporated within, and is to be
            read along with, the Terms of Use {" "}
            <a
              href="https://folknet.in/terms-and-conditions"
              style={{ color: "#FBD918", textDecoration: "none" }}
            >
              https://folknet.in/terms-and-conditions.
            </a>
          </Text>
        </Box>
        <br />
        <Box as="collection-of-information">
          <span
            style={{ fontFamily: "Abel", fontWeight: "700", fontSize: "30px" }}
          >
            INFORMATION WE COLLECT FROM YOU:
          </span>
          <Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Primary Information:
            </span>
            <Text>
              <br/>
              We might collect your{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                Name,Contact Number, Email ID,Date of Birth &#40;DOB&#41;,
                Gender, Marital Status, Residential Location, Occupation, Area
                in the City, device info{" "}
              </span>
              and upload the collected user&#39;s Primary Account information to
              our backend at{" "}
              <a
                href="https://us-central1-folk-bf69e.cloudfunctions.net"
                style={{ color: "#FBD918", textDecoration: "none" }}
              >
                https://us-central1-folk-bf69e.cloudfunctions.net
              </a>
            </Text>
          </Text>
          <Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Talent Information
            </span>
            <Text> 
              <br/>
              We might collect information about your skill sets and talent you
              possess in areas like but not limited to Music,Dance,Theatrics,
              Graphics and Video Making, Cooking Skills, Literary and Public
              Speaking Skills, Organizing Skills, Leadership Skills, Technical
              Skills, Sports Activities
            </Text>
            <Text>
              We might collect details like but not limited to experience,
              participation level, achievements in the areas you possess talent
              or skills
            </Text>
          </Text>
          <br/>
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Government ID Proof
            </span>
            <Text>
              <br/>
              We collect your government id proof for KYC and As per government
              of India Security norms.
            </Text>
          </Text>
          <br/>
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Payment and billing information:
            </span>
            <Text>
              <br/>
              We might collect your billing name, billing address and payment
              method when you buy a product&#47;service. We NEVER collect your
              credit card number or credit card expiry date or other details
              pertaining to your credit card on our website. Credit card
              information will be obtained and processed by our online payment
              partner Instamojo. The privacy policy of Instamojo can be found at
              <a
                href="https://www.instamojo.com/privacy/"
                style={{ color: "#FBD918", textDecoration: "none" }}
              >
                &#40; https://www.instamojo.com/privacy/ &#41;
              </a>
            </Text>
          </Text>
          <br/>
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Information you post:
            </span>
            <Text>
              <br/>
              We collect information you post in a public space on our{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              Platform or on a third-party platforms like landbot, social media
              site belonging to{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>
              .The privacy policy of landbot can be found at
              <a
                href="https://help.landbot.io/article/h2ndzk6som-privacy-security"
                style={{ color: "#FBD918", textDecoration: "none" }}
              >
                &#40; https://help.landbot.io/article/h2ndzk6som-privacy-security
                &#41;
              </a>{" "}
              and privacy policy of social media platforms can be found on their
              respective site&#47;apps&#47;platforms
            </Text>
          </Text>
          <br/>
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Usage and Preference Information
            </span>
            <Text>
              <br/>
              We collect information as to how you interact with our Services,
              preferences expressed and settings chosen.{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>
              Platform includes the{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              advertising services &#40;<q>Ad Services</q>&#41;, which may
              collect user activity and browsing history within the{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              Platform and across third-party sites and online services,
              including those sites and services that include our ad pixels
              &#40;<q>Pixels</q>&#41;, widgets, plug-ins, buttons, or related
              services or through the use of cookies. Our Ad Services collect
              browsing information including, without limitation, your Internet
              protocol &#40;IP&#41; address and location, your login
              information, browser type and version, date and time stamp, user
              agent,{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              cookie ID &#40;if applicable&#41;, time zone setting, browser
              plug-in types and versions, operating system and platform, and
              other information about user activities on the
              <Text>
                <br/>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  ISKCON Bangalore &#40;FOLK&#41;
                </span>{" "}
                Platform, as well as on third party sites and services that have
                embedded our Pixels, widgets, plug-ins, buttons, or related
                services.
              </Text>
            </Text>
          </Text>
          <br/>
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Transaction Information:
            </span>
            <Text>
              <br/>
              We collect transaction details related to your use of our
              Services, and information about your activity on the Services,
              including the full Uniform Resource Locators &#40;URL&#41;, the
              type of Services you requested or provided, comments, domain
              names, search results selected, number of clicks, information and
              pages viewed and searched for, the order of those pages, length of
              your visit to our Services, the date and time you used the
              Services, amount charged, details regarding application of
              promotional code, methods used to browse away from the page and
              any phone number used to call our customer service number and
              other related transaction details.
            </Text>
          </Text>
          <br/>
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              {" "}
              Stored information and files:{" "}
            </span>
            <Text>
              <br/>
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              mobile application &#40;
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>
              app&#41; may also access metadata and other information associated
              with other files stored on your device. This may include, for
              example, photographs, audio and video clips, personal contacts and
              address book information. If you permit the{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              app to access the address book on your device, we may collect
              names and contact information from your address book to facilitate
              social interactions through our services and for other purposes
              described in this Policy or at the time of consent or collection.
              If you permit the{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              app to access the calendar on your device, we collect calendar
              information such as event title and description, your response
              &#40;Yes, No, Maybe &#41;, date and time, location and number of
              attendees. If you are a partner company, we will, additionally,
              record your calls with us made from the device used to provide
              Services, related call details, SMS details location and address
              details.
            </Text>
          </Text>
          <br/>
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Demographic information:
            </span>
            <Text>
              <br/>
              We may collect demographic information about you, events you like,
              events you intend to participate in, tickets you buy, or any other
              information provided by you during the use of{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>
              Platform. We might collect this as a part of a survey also.
            </Text>
          </Text>
          <br/>
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Other information:
            </span>
            <Text>
              If you use{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              Platform, we may collect information about your IP address and the
              browser you&#39re using. We might look at what site you came from,
              duration of time spent on our website, pages accessed or what site
              you visit when you leave us. We might also collect the type of
              mobile device you are using, or the version of the operating
              system your computer or device is running.
            </Text>
          </Text>
        </Box>
        <br/>
        <Box
          as="ways-of-collection-information"
          style={{ fontFamily: "Actor", fontSize: "18px" }}
        >
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              WAYS OF COLLECTING INFORMATION:
            </span>
            <Text
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              <br/>
              We collect information directly from you:
            </Text>
            <br/>
            <ul style={{ listStyleType: "square" }}>
              <li>
                We collect information directly from you when you register on{" "}
                <span style={{ color: "black", fontWeight: "bold" }}>
                  ISKCON Bangalore &#40;FOLK&#41;
                </span>{" "}
                Platform. We also collect information if you post a comment on{" "}
                <span style={{ color: "black", fontWeight: "bold" }}>
                  ISKCON Bangalore &#40;FOLK&#41;
                </span>{" "}
                <span style={{ fontSize: "14px" }}>
                  Platform or ask us a question through phone or email or any
                  other source of communication.
                </span>
              </li>
            </ul>
          </Text>
          <br/>
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              {" "}
              We collect information from you passively:
            </span>
            <Text>
              <br/>
              <ul style={{ listStyleType: "square" }}>
                <li>
                  We use tracking tools like{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    Google Analytics, Google Webmaster, Google Cookies
                  </span>{" "}
                  for collecting information about your usage of our website.
                </li>
              </ul>
            </Text>
          </Text>
          <br/>
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We get information about you from third parties:
            </span>
            <ul style={{ listStyleType: "square" }}>
              <br/>
              <li>
                We may receive information about you from third parties, such as
                other users, partners &#40;including ad partners, analytics
                providers, search information providers&#41;, or our affiliated
                companies or if you use any of the other websites/apps we
                operate or the other Services we provide. Users of our Ad
                Services and other third-parties may share information with us
                such as the cookie ID, device ID, or demographic or interest
                data, and information about content viewed or actions taken on a
                third-party website, online services or apps. For example, users
                of our Ad Services may also be able to share customer list
                information &#40;e.g., email or phone number&#41; with us to
                create customized audience segments for their ad campaigns.
              </li>
              <br/>
              <li>
                When you sign in to{" "}
                <span style={{ color: "black", fontWeight: "bold" }}>
                  ISKCON Bangalore &#40;FOLK&#41;
                </span>{" "}
                Platform with your SNS account, or otherwise connect to your SNS
                account with the Services, you consent to our collection,
                storage, and use, in accordance with this Policy, of the
                information that you make available to us through the social
                media interface. This could include, without limitation, any
                information that you have made public through your social media
                account, information that the social media service shares with
                us, or information that is disclosed during the sign-in process.
                Please see your social media provider&#39;s privacy policy and
                help center for more information about how they share
                information when you choose to connect your account.
              </li>
              <br/>
              <li>
                If you are partner company, we may, additionally, receive
                feedback and rating from other users.
              </li>
              <br/>
            </ul>
          </Text>
        </Box>
        <Box as="use-of-information">
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              USE OF YOUR PERSONAL INFORMATION:
            </span>
            <Text
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              <br/>
              We use information to contact you:
            </Text>
            <br/>
            <Text>
              <ul style={{ listStyleType: "square" }}>
                <li>
                  We might use the information you provide to contact you for
                  confirmation of a purchase on{" "}
                  <span style={{ color: "black", fontWeight: "bold" }}>
                    ISKCON Bangalore &#40;FOLK&#41;
                  </span>{" "}
                  Platform or for other promotional purposes.
                </li>
              </ul>
            </Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We use information to abide by the contracts:
            </span>
            <Text>
              <br/>
              <ul style={{ listStyleType: "square" }}>
                <li>
                  We might use the information you provide to carry out our
                  obligations arising from any contracts entered into between
                  you and us and to provide you with the relevant information
                  and services.
                </li>
              </ul>
            </Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              <br/>
              We use information to respond to your requests or questions:
            </span>
            <Text>
              <br/>
              <ul style={{ listStyleType: "square" }}>
                <li>
                  We might use your information to confirm your registration for
                  rendering services we offer.
                </li>
              </ul>
            </Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We use information to improve our products and services:
            </span>
            <Text>
              <br/>
              <ul style={{ listStyleType: "square" }}>
                <li>
                  We might use your information to customize your experience
                  with us. This could include displaying content based upon your
                  preferences or interests. We might also use your information
                  to understand our users &#40;what they do on our Services,
                  what features they like, how they use them, etc.&#41;, improve
                  the content and features of our Services &#40;such as by
                  personalizing content to your interests&#41;, process and
                  complete your transactions, make special offers, provide
                  customer support, process and respond to your queries and to
                  generate and review reports and data about, and to conduct
                  research on, our user base and Service usage patterns. If you
                  are a partner company, we may use the information to track the
                  progress of your service to our customers.
                </li>
              </ul>
            </Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We use information to look at site trends and customer interests:
            </span>
            <Text>
              <br/>
              <ul style={{ listStyleType: "square" }}>
                <li>
                  We may use your information to make our website and
                  products/services better. We may combine information we get
                  from you with information about you we get from third parties.
                  We may use your information to provide you with information
                  about services we consider similar to those that you are
                  already using, or have enquired about, or may interest you. If
                  you are a registered user, we will contact you by electronic
                  means &#40;e-mail or SMS or telephone or whatsapp or any mode
                  of communication&#41; with information about these services.
                </li>
              </ul>
            </Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We use information for security purposes:
            </span>
            <Text>
              <ul style={{ listStyleType: "square" }}>
                <br/>
                <li>
                  We may use information to protect our company, our customers,
                  or our
                  <span style={{ color: "black", fontWeight: "bold" }}>
                    ISKCON Bangalore &#40;FOLK&#41;
                  </span>{" "}
                  Platform.
                </li>
              </ul>
            </Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We use information for marketing purposes:
            </span>
            <Text>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <br/>
                  We might send you information about special promotions or
                  offers or discounts. We might also tell you about new features
                  or products or services or enrol you in our newsletter. These
                  might be our own offers or products or services, or
                  third-party offers or products or services we think you might
                  find interesting. We may use the information to measure or
                  understand the effectiveness of advertising we serve to you
                  and others, and to deliver relevant advertising to you.
                </li>
              </ul>
            </Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We use information to send you transnational communications:
            </span>
            <Text>
              <ul style={{ listStyleType: "square" }}>
                <br/>
                <li>
                  We might send you emails or SMS&#47;WhatsApp about your
                  account or purchase of our product&#47;services.
                </li>
              </ul>
            </Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We use your talent information :
            </span>
            <Text>
              <ul style={{ listStyleType: "square" }}>
                <br/>
                <li>
                  We use your talent information to provide you a platform to
                  showcase and enhance your talent.
                </li>
              </ul>
            </Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We collect&#47;use your Government ID Proof
            </span>
            <Text>
              <ul style={{ listStyleType: "square" }}>
                <br/>
                <li>
                  We collect&#47;use government ID proof as per security norms
                  of Government of India in case you are availing accommodation
                  facilities in our campus.{" "}
                  <span style={{ fontSize: "14px" }}>
                    We collect/use government ID proof for KYC &#40;Know Your
                    Client&#41; and certification purposes.
                  </span>
                </li>
              </ul>
            </Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We use information as otherwise permitted by law:
            </span>
            <ul style={{ listStyleType: "square" }}>
              <br/>
              <li>
                We may combine the information that we receive from third
                parties with the information you give to us and information we
                collect about you for the purposes set out above. Further, we
                may anonymize and&#47;or de-identify information collected from
                you through the Services or via other means, including via the
                use of third-party web analytic tools. As a result, our use and
                disclosure of aggregated and&#47;or de-identified information is
                not restricted by this Policy, and it may be used and disclosed
                to others without limitation.
              </li>
              <br/>
              <li>
                We analyse the log files of our{" "}
                <span style={{ color: "black", fontWeight: "bold" }}>
                  ISKCON Bangalore &#40;FOLK&#41;
                </span>{" "}
                Platform that may contain Internet Protocol &#40;IP&#41;
                addresses, browser type and language, Internet service provider
                &#40;ISP&#41;, referring, app crashes, page viewed and exit
                websites and applications, operating system, date/time stamp,
                and clickstream data. This helps us to administer the website,
                to learn about user behavior on the site, to improve our product
                and services, and to gather demographic information about our
                user base as a whole.
              </li>
            </ul>
          </Text>
        </Box>
        <br/>
        <Box as="sharing-of-information">
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              SHARING/DISCLOSURE/DISTRIBUTION OF YOUR INFORMATION WITH
              THIRD-PARTIES:
            </span>
            <Text
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              <br/>
              We will share information with third parties who perform services
              on our behalf:
            </Text>
            <ul style={{ listStyleType: "square" }}>
              <br/>
              <li>
                We may share your information with our vendors, consultants,
                marketing partners, research firms and other service providers
                or business partners, such as payment processing companies, to
                support our business. For example, your information may be
                shared with outside vendors to send you emails and messages or
                push notifications to your devices in relation to our Services,
                to help us analyze and improve the use of our Services, to
                process and collect payments.
              </li>
              <br/>
              <li>
                We may also use vendors for other projects, such as conducting
                surveys. Some vendors may be located outside of India.
              </li>
              <br/>
            </ul>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We will share information with Advertisers and advertising
              networks:
            </span>
            <ul style={{ listStyleType: "square" }}>
            <br/>
              <li>
                We may work with third parties such as network advertisers to
                serve advertisements on the{" "}
                <span style={{ color: "black", fontWeight: "bold" }}>
                  ISKCON Bangalore &#40;FOLK&#41;
                </span>{" "}
                Platform and on third-party websites or other media &#40;e.g.,
                social networking platforms&#41;. These third parties may use
                cookies, JavaScript, web beacons &#40;including clear GIFs&#41;,
                Flash LSOs and other tracking technologies to measure the
                effectiveness of their ads and to personalize advertising
                content to you.
              </li>
              <br/>
              <li>
                While you cannot opt out of advertising on the{" "}
                <span style={{ color: "black", fontWeight: "bold" }}>
                  ISKCON Bangalore &#40;FOLK&#41;
                </span>{" "}
                Platform, you may opt out of much interest-based advertising on
                third party sites and through third party ad networks
                &#40;including DoubleClick Ad Exchange, Facebook Audience
                Network and Google AdSense&#41;. Opting out means that you will
                no longer receive personalized ads by third parties ad networks
                from which you have opted out, which is based on your browsing
                information across multiple sites and online services. If you
                delete cookies or change devices, your &#x275B;opt out&#x275C;
                may no longer be effective to fulfill the purpose for which you
                provide it.
              </li>
            </ul>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We will share information with our business partners:
            </span>
            <ul style={{ listStyleType: "square" }}>
              <br/>
              <li>
                This includes a third party who provide us various
                services&#47;products. Our partners use the information we give
                them as described in their privacy policies.
              </li>
              <br/>
              <li>
                While you place a request to order through the{" "}
                <span style={{ color: "black", fontWeight: "bold" }}>
                  ISKCON Bangalore &#40;FOLK&#41;
                </span>{" "}
                Platform, your information is provided to us and to the vendors
                with whom you may choose to order. In order to facilitate your
                online order processing, we provide your information to that
                vendors in a similar manner as if you had made a
                goods&#47;products&#47;services with the vendors. If you provide
                a mobile phone number,{" "}
                <span style={{ color: "black", fontWeight: "bold" }}>
                  ISKCON Bangalore &#40;FOLK&#41;
                </span>{" "}
                may send you text messages&#47;emails&#47;WhatsApp&#47;Push
                Notifications regarding the order&#39;s delivery status.
              </li>
            </ul>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We may share information if we think we have to in order to comply
              with the law or to protect ourselves:
            </span>
            <Text>
              <br/>
              We may also share it if a government agency or investigatory body
              or other companies assisting us, requests when we are:
            </Text>
            <ul style={{ listStyleType: "square" }}>
              <br/>
              <li>
                Obligated under the applicable laws or in good faith to respond
                to court orders and processes;
              </li>
              <br/>
              <li>
                Detecting and preventing against actual or potential occurrence
                of identity theft, fraud, abuse of Services and other illegal
                acts;
              </li>
              <br/>
              <li>
                Responding to claims that an advertisement, posting or other
                content violates the intellectual property rights of a third
                party;
              </li>
              <br/>
              <li>
                {" "}
                Under a duty to disclose or share your personal data in order to
                enforce our Terms of Use and other agreements, policies or to
                protect the rights, property, or safety of the Company, our
                customers, or others, or in the event of a claim or dispute
                relating to your use of our Services. This includes exchanging
                information with other companies and organisations for the
                purposes of fraud detection and credit risk reduction.
              </li>
            </ul>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We may share information for Internal Use or may share it with any
              successor to all or part of our business:
            </span>
            <Text>
              <ul style={{ listStyleType: "square" }}>
                <br/>
                <li>
                  For example, if part of our business is sold we may give our
                  customer list as part of that transaction. We may also share
                  your information with any present or future member of our{" "}
                  <q>Group</q> &#40;as defined above&#41; or affiliates for our
                  internal business purposes.
                </li>
              </ul>
            </Text>
            <br/>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              We may share your information for reasons not described in this
              policy:
            </span>
            <Text>
              <ul>
                <br/>
                <li style={{ listStyleType: "square" }}>
                  We may share your information other than as described in this
                  Policy if we notify you and you consent to the sharing. We
                  will tell you before we do this.
                </li>
              </ul>
            </Text>
          </Text>
        </Box>
        <br/>
        <Box as="your-consent">
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              YOUR CONSENT:{" "}
            </span>
            <Text>
              <br/>
              By using the{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              Platform and the Services provided therein, you agree and consent
              to the collection, transfer, use, storage, disclosure and sharing
              of your information as described and collected by us in accordance
              with this Policy. If you do not agree with the Policy, please do
              not use or access the{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              Platform.
            </Text>
          </Text>
        </Box>
        <br/>
        <Box as="cookies">
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              COOKIES:
            </span>
            <Text>
              <br/>
              Our{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              Platform and third parties with whom we partner, may use cookies,
              pixel tags, web beacons, mobile device IDs, <q>flash cookies</q>{" "}
              and similar files or technologies to collect and store information
              with respect to your use of the Services and third-party websites.
            </Text>
            <br/>
            <Text>
              Cookies are small files that are stored on your browser or device
              by websites, apps, online media and advertisements. We use cookies
              and similar technologies for purposes such as:
            </Text>
            <br/>
            <ul style={{ listStyleType: "square" }}>
              <li>Authenticating users;</li>
              <br/>
              <li>Remembering user preferences, interests and settings;</li>
              <br/>
              <li>Determining the popularity of content;</li>
              <br/>
              <li>
                Delivering andmeasuring the effectiveness of advertising
                campaigns; Analysing site traffic and trends, and generally
                understanding the online behaviours and interests of people who
                interact with our services.
              </li>
            </ul>
            <br/>
            <Text>
              A pixel tag &#40;also called a web beacon or clear GIF&#41; is a
              tiny graphic with a unique identifier, embedded invisibly on a
              webpage &#40;or an online ad or email&#41;, and is used to count
              or track things like activity on a webpage or ad impressions or
              clicks, as well as to access cookies stored on user&#39;s
              computers. We use pixel tags to measure the popularity of our
              various pages, features and services. We also may include web
              beacons in e-mail messages or newsletters to determine whether the
              message has been opened and for other analytics.
            </Text>
            <br/>
            <Text>
              To modify your cookie settings, please visit your browser&#39;s
              settings. By using our Services with your browser settings to
              accept cookies, you are consenting to our use of cookies in the
              manner described in this section.
            </Text>
            <br/>
            <Text>
              We may also allow third parties to provide audience measurement
              and analytics services for us, to serve advertisements on our
              behalf across the Internet, and to track and report on the
              performance of those advertisements. These entities may use
              cookies, web beacons, SDKs and{" "}
              <span style={{ fontSize: "14px" }}>
                other technologies to identify your device when you visit the{" "}
                <span style={{ fontWeight: "bold" }}>
                  ISKCON Bangalore &#40;FOLK&#41;
                </span>
              </span>
            </Text>
            <br/>
            <Text>
              Platform and use our Services, as well as when you visit other
              online sites and services.
            </Text>
          </Text>
        </Box>
        <br/>
        <Box as="data-security-precautions">
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              DATA SECURITY PRECAUTIONS:
            </span>
            <Text>
              <br/>
              We have in place appropriate technical and security measures to
              secure the information collected by us. We use vault and
              tokenization services from third party service providers to
              protect the sensitive personal information provided by you. The
              third-party service providers with respect to our vault and
              tokenization services and our payment gateway and payment
              processing are compliant with the payment card industry standard
              &#40;generally referred to as PCI compliant service providers
              &#41;. You are advised not to send your full credit&#47;debit card
              details through unencrypted electronic platforms. Where we have
              given you &#40;or where you have chosen &#41; a username and
              password which enables you to access certain parts of the{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              Platform, you are responsible for keeping these details
              confidential. We ask you not to share your password with anyone.
            </Text>
            <br/>
            <Text>
              Please be aware that the transmission of information via the
              internet is not completely secure. Although we will do our best to
              protect your personal data, we cannot guarantee the security of
              your data transmitted through the{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              Platform. Once we have received your information, we will use
              strict physical, electronic, and procedural safeguards to try to
              prevent unauthorised access.
            </Text>
          </Text>
        </Box>
        <br/>
        <Box as="email-opt-out">
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              {" "}
              Email OPT-OUT:{" "}
            </span>
            <Text>
              <br/>
              You can opt out of receiving our marketing emails. To stop
              receiving our promotional emails, please email &#40;
              info@folknet.in &#41;. It may take about 15 working days to
              process your request. Even if you opt out of getting marketing
              messages, we will still be sending you transactional messages
              through but not limited to email and SMS about your purchases of
              our product&#47;services.
            </Text>
          </Text>
        </Box>
        <br/>
        <Box as="third-party-sites">
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              THIRD PARTY SITES:
            </span>
            <Text>
              <br/>
              The{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              Platform may contain links to other websites. If you click on one
              of the links to third party websites, you may be taken to websites
              we do not control. Any personal information about you collected
              whilst visiting such websites is not governed by this Policy.{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              shall not be responsible for and has no control over the practices
              and content of any website accessed using the links contained on
              the{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              Platform. Read the privacy policy of other websites carefully as
              this policy does not apply to the privacy practices of those
              websites. We are not responsible for these third party sites.
            </Text>
            <br/>
            <Text>
              This Policy shall also not apply to any information you may
              disclose to any of our service provider&#47;service personnel
              which we do not require you to disclose to us or any of our
              service providers under this Policy.
            </Text>
          </Text>
        </Box>
        <br/>
        <Box as="grievance">
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              GRIEVANCE OFFICER:
            </span>
            <Text>
              <br/>
              In accordance with Information Technology Act <time>2000</time>{" "}
              and rules made and applicable there under, the name and contact
              details of the Grievance Officer are provided below:
            </Text>
            <address>
              Name: Veeresh (Vallabha Chaitanya Dasa) Address: ISKCON Bangalore,
              Hare Krishna Hill, West of Chord Road, Bangalore 560010,
              Karnataka, India Phone Number: 080 2357 8347 (Extn: 532)/
              9743121808 Email Address:: vbcd@hkm-group.org
            </address>
          </Text>
        </Box>
        <br/>
        <Box as="jurisdiction">
          <Text>
            <span
              style={{
                fontFamily: "Abel",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              JURISDICTION:
            </span>
            <Text>
              <br/>
              If you choose to visit the website, your visit and any dispute
              over privacy is subject to this Policy and the website&#39;s terms
              of use. In addition to the foregoing, any disputes arising under
              this Policy shall be governed by the laws of India.
            </Text>
            <br/>
            <Text>
              Further, please note that the{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                ISKCON Bangalore &#40;FOLK&#41;
              </span>{" "}
              Platform stores your data with the cloud platform of{" "}
              <span style={{ fontWeight: "bold" }}>Google Cloud Platform</span>
              provided by &#40;Google&#41;, which may store this data on their
              servers located in India or elsewhere. Google Cloud Platform has
              security measures in place to protect the loss, misuse and
              alteration of the information, details of which are available at
              <span style={{ textDecoration: "none", fontWeight: "bold" }}>
                {" "}
                https://cloud.google.com/
              </span>
              . The privacy policies adopted by{" "}
              <span style={{ fontWeight: "bold" }}>Google Cloud Platform </span>
              are detailed in
              <span style={{ textDecoration: "none", fontWeight: "bold" }}>
                {" "}
                https://cloud.google.com/security/privacy/.
              </span>
            </Text>
            <br/>
            <Text>
              In the event you have questions or concerns about the security
              measures adopted by <strong>Google Cloud Platform</strong>, you
              can contact their data protection&#47; privacy team&#47; legal
              team or designated grievance officer at these organisations, whose
              contact details are available in its privacy policy, or can also
              write to our Grievance Officer at the address provided above.
            </Text>
            <Text>
              If you have any queries relating to the processing or usage of
              information provided by you in connection with this Policy or
              other privacy concerns, you can email us at{" "}
              <a
                href="mailto: info@folknet.in"
                style={{ textDecoration: "none", color: "#fbd918" }}
              >
                {" "}
                info@folknet.in.
              </a>
            </Text>
          </Text>
        </Box>
        
      </Box>
    </>
  );
};

export default PrivacyPolicy;
