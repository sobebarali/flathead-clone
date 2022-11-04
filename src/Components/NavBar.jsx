import React from "react"
import { Flex, Spacer, Image, Text, Icon } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { BsSearch, BsBasket3 } from "react-icons/bs"
import { BiUser } from "react-icons/bi"

const NavBar = () => {
  return (
    <Flex
      bg="white"
      borderBottom="0.25px solid #b1b3b5"
      p={1}
      align="center"
      justify="center"
    >
      <Spacer />
      <Link to="/">
        <Image
          src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_192x32.png?v=1647508945"
          alt="Flathead Logo"
          height="25px"
          mt={15}
          ml={20}
        />
      </Link>

      <Spacer />
      <Link to="/collections/all">
        <Text px={4} py={2}>
          SHOP
        </Text>
      </Link>
      <Link to="/collections/all">
        <Text px={4} py={2}>
          WOMEN
        </Text>
      </Link>
      <Link to="/collections/all">
        <Text px={4} py={2}>
          MEN
        </Text>
      </Link>
      <Link to="/collections/all">
        <Text px={4} py={2}>
          NEW ARRIVALS
        </Text>
      </Link>
      <Link to="/collections/all">
        <Text px={4} py={2}>
          ABOUT
        </Text>
      </Link>
      <Link to="/collections/all">
        <Text px={4} py={2}>
          HELP
        </Text>
      </Link>
      <Spacer />
      <Icon as={BsSearch} boxSize="20px" mx={6} />
      <Icon as={BiUser} boxSize="20px" mx={6} />
      <Icon as={BsBasket3} boxSize="20px" mx={6} />
      <Text>0</Text>
      <Spacer />
    </Flex>
  )
}

export default NavBar
