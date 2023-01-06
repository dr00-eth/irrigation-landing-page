/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={() => {
          const next = isDark ? `light` : `dark`
          setColorMode(next)
        }}
        type="button"
        data-testid="color-mode-toggle"
        aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <footer
        sx={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          p: 2,
          variant: `styles.footer`,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {isDark ? (
          <Link
          sx={{ variant: 'styles.navlink', p: 2 }}
          aria-label="Irrigation Protocol Twitter"
          href="https://twitter.com/IrrigationProto"
          >
            <Svg icon="twitter" width={32} left="40%" stroke color="icon_brightest" />
          </Link>
        ) : (
          <Link
          sx={{ variant: 'styles.navlink', p: 2 }}
          aria-label="Irrigation Protocol Twitter"
          href="https://twitter.com/IrrigationProto"
          >
            <Svg icon="twitter" width={32} left="40%" stroke color="icon_darkest" />
          </Link>
        )}
        {` `}
        {isDark ? (
          <Link
          sx={{ variant: 'styles.navlink', p: 2 }}
          aria-label="Irrigation Protocol GitBook"
          href="https://docs.irrigation.finance"
          >
            <Svg icon="github" width={32} left="60%" stroke color="icon_brightest" />
          </Link>
        ) : (
          <Link
          sx={{ variant: 'styles.navlink', p: 2 }}
          aria-label="Irrigation Protocol GitBook"
          href="https://docs.irrigation.finance"
          >
            <Svg icon="github" width={32} left="60%" stroke color="icon_darkest" />
          </Link>
        )}
      </footer>
    </Box>
  )
}

export default Footer
