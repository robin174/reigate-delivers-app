import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { MapPin, Clock, AlertCircle } from 'react-feather';
import { getDeliveryRange } from './Helpers';
import { useData } from '../context/DataProvider';
import { ButtonPrimary } from './Buttons';


export const MailchimpForm = (props) => {
  const form = useRef();
  return (
    <StyledForm {...props} ref={form}>
      <StyledInputWrap>
        <input type="email" />
        <ButtonPrimary onClick={() => { form.submit(); }}>Sign up</ButtonPrimary>
      </StyledInputWrap>
      <small>You can unsubscribe from these communications at anytime. We won't spam you. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.</small>
    </StyledForm>
  )
}

export const CalloutCard = ({ children, ...rest }) => {
  return (
    <StyledCard base="var(--base)" align="center" {...rest}>
      <StyledCalloutCardInner>
        {children}
      </StyledCalloutCardInner>
    </StyledCard>
  )
}

const LocationCardAccordion = ({ title, children }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <StyledAccordionWrap>
      <StyledAccordionTitle onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
        <Clock /><p>{title}</p>
      </StyledAccordionTitle>
      <StyledAccordionBody isOpen={isAccordionOpen}>
        {children}
      </StyledAccordionBody>
    </StyledAccordionWrap>
  )
}

const LocationCardPropList = ({ children }) => {
  return (
    <StyledCardList>
      {children}
    </StyledCardList>
  )
}

export const LocationCard = ({ details, children, ...rest }) => {
  const { cover, name, website, phone, file, address, deliveryHours, safetyTips } = details;
  const { postModalContent } = useData();
  return (
    <StyledCard base="#fff" {...rest}>
      <StyledCardImageWrap>
        <img src={cover} alt={name} />
      </StyledCardImageWrap>
      <StyledCardBody>
        {children}
      </StyledCardBody>
      <LocationCardPropList>
        {address && <li><MapPin /><p>{address}</p></li>}
        {deliveryHours.length > 0 && <li>
          <LocationCardAccordion title={getDeliveryRange(deliveryHours)}>
            {deliveryHours.map(time => <small key={time}>{time}</small>)}
          </LocationCardAccordion>
        </li>}
        {safetyTips && <li onClick={() => postModalContent(safetyTips)}><AlertCircle /><p>Safety tips</p></li>}
      </LocationCardPropList>
      <StyledCardLinks>
        {website && <li><StyledCardLinkItem href={`http://${website}`}>🔗 Go to website</StyledCardLinkItem></li>}
        {phone && <li><StyledCardLinkItem href={`tel://${phone}`}>{`🤙 Call ${phone}`}</StyledCardLinkItem></li>}
        {file && <li><StyledCardLinkItem href={`/uploads/${file}`}>📃 Download PDF</StyledCardLinkItem></li>}
      </StyledCardLinks>
    </StyledCard>
  )
}

const StyledCard = styled.article`
  display:flex;
  justify-content:${props => props.align || "flex-start"};
  align-items:${props => props.align || "flex-start"};
  flex-flow:column nowrap;
  background-color:${props => props.base || "#FFF"};
  border-radius:0.5rem;
  box-shadow:0 1rem 2rem rgba(0,0,0,0.08);  
  height:100%;

  > * {
    width:100%;
    margin-bottom:var(--spacing-sm);
  }
`;
const StyledCardImageWrap = styled.picture`
  display:block;  
  width:100%;
  height:200px;
  overflow:hidden;
  border-top-left-radius:0.5rem;
  border-top-right-radius:0.5rem;

  img {
    object-fit:cover;
    width:100%;
    height:100%;
  }
`;
const StyledCardBody = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  flex-flow:column nowrap;
  padding:0 var(--spacing-sm);

  > * {
    width:100%;
    margin:0 0 .85rem 0;
  }

  small {
    text-transform:uppercase;
    font-weight:700;
    color:var(--text-low);
  }

  p {
    max-width:30ch;
    margin-bottom:0;
  }
`
const StyledCardLinks = styled.ul`
  display:block;  
  padding:0 var(--spacing-sm);
`
const StyledCardLinkItem = styled.a`
  display:block;
  border-top:1px solid var(--base-light);
  padding:var(--spacing-xs) 0;  
  text-decoration:none;  
  transition:all .2s ease;

  &:hover {
    text-decoration:underline;
    transition:all .2s ease;    
  }
`
const StyledCardList = styled.ul`
  display:block;
  padding:0 var(--spacing-xs);

  li {
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding-bottom:var(--spacing-sm);
    color:var(--text-med);   
     

    &:last-of-type {
      padding-bottom:0;
      cursor:pointer;

      &:hover {
        text-decoration:underline;
      }
    }
    p {
      flex:1;
      padding-left:var(--spacing-xs);
    }
  }
`
const StyledAccordionWrap = styled.div`
  display:block;
`
const StyledAccordionTitle = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;  
  color:var(--text-med);
  cursor:pointer;
  text-decoration:none;

  &:hover {
    text-decoration:underline;
  }
`
const StyledAccordionBody = styled.div`  
  will-change:max-height, overflow;
  max-height:${props => props.isOpen ? '200px' : '0'};
  overflow: ${ props => props.isOpen ? 'auto' : 'hidden'};
  transition: all .2s ease;

  small {
    padding-top:1rem;
    padding-left:2.5rem;
    color:var(--text-low);
  }
`
const StyledCalloutCardInner = styled.div`
  padding:var(--spacing-md) 0;
  text-align:center;

  h2 {
    color:var(--text-high-white);
  }
  p {
    color:var(--text-med-white);
    max-width:45ch;
    margin-left:auto;
    margin-right:auto;
  }  
`

const StyledForm = styled.form`
  display:block;
  margin:0 auto;
  text-align:center;

  small {
    max-width:480px;
    margin:0 auto;
    color:var(--text-low-white);
  }
`


const StyledInputWrap = styled.div`
  position:relative;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  max-width:420px;  
  margin:var(--spacing-sm) auto;
  color:#d8d8d8;

  button {
    flex:0 0 30%;
    font-size:1.125rem;
    line-height:1.25;
    border-top-left-radius:0;
    border-bottom-left-radius:0;
    margin:0;
  }
  input {
    display:block;
    width:100%;
    flex:1;
    padding:var(--spacing-xs);
    border-radius:0.25rem;
    border-top-right-radius:0;
    border-bottom-right-radius:0;
    background-color:#fff;
    border:1px solid var(--base-light);
    box-shadow:0 0.5rem 1rem rgba(0,0,0,0.08);
    font-size:1rem;
    line-height:1;
    font-family:var(--font-stack);
    color:var(--text-med);
  }
`