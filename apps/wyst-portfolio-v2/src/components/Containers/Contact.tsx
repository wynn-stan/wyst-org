'use client';

import clsx from 'clsx';
import {
  Mails,
  MailsIcon,
  MoveRightIcon,
  ScrollTextIcon,
  SquareUserIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export default function Contact() {
  /**
   *  Variables
   */
  const contacts = {
    linkedIn: {
      logoUrl: '/assets/logos/linkedin-icon.png',
      name: 'linkedIn',
    },
  };

  return (
    <div className="bg-black-50 space-y-4 px-3 py-5">
      <div className="text-black-600 flex gap-2">
        <SquareUserIcon size={20} />
        <div>Contact</div>
      </div>
      <div className="h-[2px] w-full bg-black-100" />
      <div className="space-y-3">
        <div className="flex gap-3">
          <ContactItem href="https://www.linkedin.com/in/winston-lamptey/">
            <Image
              src={contacts.linkedIn.logoUrl}
              alt="logo.png"
              width={24}
              height={24}
            />
            <div>{contacts.linkedIn.name}</div>
          </ContactItem>
          <ContactItem href="mailto:winstonlamptey456@gmail.com">
            <MailsIcon size={24} />
            <div>Email</div>
          </ContactItem>
        </div>
        <ContactItem href="https://drive.google.com/file/d/1_cRmAl3xuZ4xMUqp3k6Och1KoRvKxu3S/view?usp=sharing">
          <ScrollTextIcon size={24} />
          <div>Resume</div>
        </ContactItem>
      </div>
    </div>
  );
}

function ContactItem({
  href,
  children,
}: HTMLAttributes<HTMLAnchorElement> & { href: string }) {
  /**
   * Style
   */
  const StyledLink = styled(Link)`
    &:hover .icon {
      background: white;
      color: black;
    }
  `;

  return (
    <StyledLink
      target="_blank"
      href={href}
      className={clsx(
        'hover:bg-black-950 hover:text-white',
        'flex p-4 bg-black-100',
        'rounded-xl flex-grow'
      )}
    >
      <div className="flex gap-2 flex-grow">{children}</div>
      <div
        className={clsx(
          'icon',
          'flex justify-center items-center',
          'rounded-full w-6 h-6  ',
          ' bg-black-950 text-white '
        )}
      >
        <MoveRightIcon size={16} />
      </div>
    </StyledLink>
  );
}
