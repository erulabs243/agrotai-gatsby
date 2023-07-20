/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import "@fontsource/barlow";
import "@fontsource/dm-sans";

import React from "react";
import {Provider} from 'jotai'

export const wrapRootElement = ({element}) => {
    return (
        <Provider>
            {element}
        </Provider>
    )
}