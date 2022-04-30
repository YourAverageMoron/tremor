import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import { Sizes } from '@utils/component-utils';
import { Title } from 'components';

import { Flex } from 'components';

import {
    ButtonInline,
    ButtonInlineArrow,
    ButtonPrimary,
    ButtonPrimaryArrow,
    ButtonPrimaryIconLeading,
    ButtonPrimaryIconTrailing,
    ButtonSecondary,
    ButtonSecondaryArrow,
    ButtonSecondaryIconLeading,
    ButtonSecondaryIconTrailing,
} from 'components';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ButtonElements/ButtonSizes',
    component: Flex,
} as ComponentMeta<typeof Flex>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Icon = ArrowUpLineIcon;
const handleClick = () => console.log('clicked');
const buttonText = 'Button Text';

const Template: ComponentStory<never> = () => (
    <>
        <div className="mb-5">
            <Title text="ButtonPrimary"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonPrimary text={ buttonText } size={ Sizes[key] } handleClick={ handleClick } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="ButtonSecondary"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonSecondary text={ buttonText } size={ Sizes[key] } handleClick={ handleClick } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="ButtonPrimaryArrow"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonPrimaryArrow text={ buttonText } size={ Sizes[key] } handleClick={ handleClick } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="ButtonSecondaryArrow"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonSecondaryArrow text={ buttonText } size={ Sizes[key] } handleClick={ handleClick } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="ButtonPrimaryIconLeading"/>
            <div className="grid grid-cols-8 justify-items-start items-center gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonPrimaryIconLeading
                            Icon={ Icon }
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="ButtonSecondaryIconLeading"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonSecondaryIconLeading
                            Icon={ Icon }
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="ButtonPrimaryIconTrailing"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonPrimaryIconTrailing
                            Icon={ Icon }
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="ButtonSecondaryIconTrailing"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonSecondaryIconTrailing
                            Icon={ Icon }
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="ButtonInline"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonInline
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="ButtonInlineArrow"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonInlineArrow
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
    </>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args