import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface VercelInviteUserEmailProps {
  name?: string
  previewText?: string
}

export const WelcomeEmail = ({
  name = '',
  previewText = 'Bem vindo ao TOOP',
}: VercelInviteUserEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        {name}, {previewText}
      </Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              <strong>{name}</strong>, Bem vindo ao <strong>TOOP</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Olá {name},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              sit inventore aperiam sint expedita similique in, quia ipsa,
              alias, iure perspiciatis beatae consectetur sequi quae dicta animi
              nihil velit! Cum.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeEmail
