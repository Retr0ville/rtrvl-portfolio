/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from 'react';
import { MailSvg } from "../images/output";
import { ArrowSvg } from "../images/right-arrow";

const ContactForm = () => (
  <form action="POST"
    sx={{
      display: `inline-flex`,
      width: ['100%', '100%', '100%', '100%', '55%']
      // marginLeft: `6rem`
    }}
  >
    <div
      sx={{
        display: `flex`,
        flexDirection: `column`,

        alignItems: `center`,
        width: `100%`,
        maxWidth: `640px`,
        padding: `1rem`,
        boxShadow: `-2px -2px 3px 3px rgba( 31, 38, 135, 0.6 )`,
        // backdropFilter: `blur( 1px )`,
        borderRadius: `10px`,
        border: `.5px dashed violet`,
        // "-webkit-backdrop-filter": `blur( 1px )`,
        fontFamily: `monospace`
      }}
    >
      <h3
        sx={{
          width: `100%`,
          display: `flex`,
          alignItems: `center`,
        }}
      >
        <div
          sx={{
            display: `inline-flex`,
            width: `25px`,
            height: `25px`,
            marginRight: `6px`,
          }}
        ><MailSvg /></div>
        WRITE TO ME
      </h3>
      <div
        sx={{
          width: `100%`,
          display: `flex`,
          flexDirection: `column`,
          marginInline: ['1rem', '1rem', '2.5rem'],
          maxWidth: `400px`
        }}
      >
        <label htmlFor="name"
          sx={{
            display: `flex`,
            width: `100%`,
            flexDirection: `column`,
            marginBottom: `1rem`,
          }}
        >
          <p
            sx={{
              marginBlock: `.1rem`
            }}
          >Name: <span sx={{ color: `cyan` }}>{'{'}</span></p>
          <input type="text" id="name" placeholder="Enter name"
            sx={{
              marginLeft: `1rem`,
              width: ['unset', 'unset', 'unset', '100%'],
              background: `transparent`,
              fontFamily: `monospace`,
              fontSize: `.85rem`,
              color: `GrayText`,
              border: `1px solid #2d3748`,
              borderRadius: `4px`,
              height: '1.5rem',
              paddingLeft: `1rem`
            }}
          />
          <span sx={{ color: `cyan` }}>{'},'}</span>
        </label>
        <label htmlFor="email"
          sx={{
            display: `flex`,
            width: `100%`,
            flexDirection: `column`,
            marginBottom: `1rem`,
          }}
        >
          <p
            sx={{
              marginBlock: `.1rem`
            }}
          >Email:  <span sx={{ color: `cyan` }}>{'{'}</span></p>
          <input type="text" required id="email" placeholder="Enter email address"
            sx={{
              marginLeft: `1rem`,
              width: ['unset', 'unset', 'unset', '100%'],
              background: `transparent`,
              fontFamily: `monospace`,
              fontSize: `.85rem`,
              color: `GrayText`,
              border: `1px solid #2d3748`,
              borderRadius: `4px`,
              height: '1.5rem',
              paddingLeft: `1rem`
            }}
          />
          <span sx={{ color: `cyan` }}>{'},'}</span>
        </label>
        <label htmlFor="subject"
          sx={{
            display: `flex`,
            width: `100%`,
            flexDirection: `column`,
            marginBottom: `1rem`,
          }}
        >
          <p
            sx={{
              marginBlock: `.1rem`
            }}
          >Subject:  <span sx={{ color: `cyan` }}>{'{'}</span></p>
          <input type="text" id="subject" placeholder="Enter subject"
            sx={{
              marginLeft: `1rem`,
              width: ['unset', 'unset', 'unset', '100%'],
              background: `transparent`,
              fontSize: `.85rem`,
              color: `GrayText`,
              fontFamily: `monospace`,
              border: `1px solid #2d3748`,
              borderRadius: `4px`,
              height: '1.5rem',
              paddingLeft: `1rem`
            }}
          />
          <span sx={{ color: `cyan` }}>{'},'}</span>
        </label>
        <label htmlFor="message"
          sx={{
            display: `flex`,
            width: `100%`,
            flexDirection: `column`,
            marginBottom: `1rem`,
          }}
        >
          <p
            sx={{
              marginBlock: `.1rem`
            }}
          >Message:  <span sx={{ color: `cyan` }}>{'{'}</span></p>
          <textarea id="message" required placeholder="Write a message"
            sx={{
              marginLeft: `1rem`,
              width: ['unset', 'unset', 'unset', '100%'],
              background: `transparent`,
              fontFamily: `monospace`,
              fontSize: `1rem`,
              color: `GrayText`,
              border: `1px solid #2d3748`,
              borderRadius: `4px`,
              height: '150px',
              padding: `1rem`
            }}
          />
          <span sx={{ color: `cyan` }}>{'}'}</span>
        </label>
        <button title="send" type="submit"
          sx={{
            alignSelf: `flex-end`,
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
            width: `90px`,
            height: `40px`,
            backgroundColor: `#787878`,
            color:`#000`,
            fontSize:`1rem`,
            border: `none`,
            borderRadius: `5px`
          }}
        ><ArrowSvg /></button>
      </div>

    </div>
  </form>
)

export default ContactForm