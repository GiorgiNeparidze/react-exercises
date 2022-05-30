import React from 'react'
import { LanguageContext } from './LanguageContext'


const Languages = {
    en:{
        hello: "Hi !"
    },
    ru:{
        hello: "Здарова!"
    }
}

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <div>
                <LanguageContext.Consumer>
                    { Language => Languages[Language].hellow }                      
                </LanguageContext.Consumer>
            </div>
        )
    }
}