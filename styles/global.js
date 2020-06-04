import React from 'react'
import Theme from './theme'

export default () => (
    <style>{`
        body {
            color: #444;
            margin: 0;
            font-size: 14px;
            background-color: ${Theme.colors.offWhite};
            font-family: ${Theme.fonts.sans}
        }
        * {
            box-sizing: border-box;
        }
    `}
    </style>
)
