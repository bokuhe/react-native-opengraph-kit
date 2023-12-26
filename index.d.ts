import React from "react";
import {
    StyleSheet,
    TextStyle,
    ViewStyle,
    ImageSourcePropType,
} from "react-native";

// Define props and state types for OpenGraphDisplay component
export interface OpenGraphDisplayProps {
    containerStyle?: StyleSheet;
    descriptionStyle?: TextStyle;
    data: {
        url: string;
        image: string;
        title: string;
        description: string;
    };
    iconSource?: ImageSourcePropType;
    iconStyle?: StyleSheet;
    imageStyle?: StyleSheet;
    onIconPress?: () => void;
    textContainerStyle?: StyleSheet;
    touchContainerStyle?: StyleSheet;
    titleStyle?: TextStyle;
    urlStyle?: TextStyle;
    urlOnlyContainerStyle?: StyleSheet;
    urlOnlyTouchContainerStyle?: StyleSheet;
}

export class OpenGraphDisplay extends React.Component<OpenGraphDisplayProps> {}

// Define props and state types for OpenGraphAwareInput component
export interface OpenGraphAwareInputProps {
    debounceDelay?: number;
    resultLimit?: number;
    showIcon?: boolean;
    containerStyle?: StyleSheet;
    textInputStyle?: StyleSheet;
    onIconPress?: () => void;
    iconSource?: ImageSourcePropType;
    iconStyle?: StyleSheet;
}

export interface OpenGraphAwareInputState {
    openGraphData: Array<any>;
}

export class OpenGraphAwareInput extends React.Component<
    OpenGraphAwareInputProps,
    OpenGraphAwareInputState
> {}

// Define the OpenGraphParser functions and their return types
export namespace OpenGraphParser {
    function extractMeta(
        content: string,
        options?: { fallbackOnHTMLTags: boolean }
    ): Promise<any[]>;
    function findOGTags(content: string, url: string): any;
    function findHTMLMetaTags(content: string, url: string): any;
}

// Export the components and OpenGraphParser
export { OpenGraphAwareInput, OpenGraphDisplay, OpenGraphParser };
