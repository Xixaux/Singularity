'use client';

import * as Prism from 'prismjs';
import { ElementType, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import './prism-languages';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import SingularitySvgIcon from '../SingularitySvgIcon';

type SingularityHighlightProps = {
    async?: boolean;
    children: string | { default?: string };
    component?: ElementType;
    className: string;
    copy?: boolean;
    ref?: React.RefObject<HTMLDivElement>;
};

function SingularityHighlight(props: SingularityHighlightProps) {
    const { copy = true, async = false, children, className, component: Wrapper = 'code', ref } = props;

    const innerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => innerRef.current, [innerRef]);
    const [open, setOpen] = useState(false);

    const [source, setSource] = useState(trimCode(children));

    const highlight = useCallback(() => {
        if (innerRef.current) {
            Prism.highlightElement(innerRef.current, async);
        }
    }, [async]);

    useEffect(() => {
        setSource(trimCode(children));
    }, [children]);

    useEffect(() => {
        highlight();
    }, [highlight, source]);

    function handleCopy() {
        navigator.clipboard.writeText(source);
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 800);
    }

    return (
        <div className={clsx('relative not-prose', className)}>
            {copy && (
                <Tooltip
                    title="Copied!"
                    open={open}
                    slotProps={{ popper: { placement: 'top' } }}
                    arrow
                >
                    <Button
                        variant="contained"
                        onClick={handleCopy}
                        size="small"
                        color="secondary"
                        className="absolute top-0 right-0 m-1.5 z-10 rounded-sm p-0 text-md min-h-0 h-auto w-auto min-w-0 px-2 py-1"
                        classes={{ startIcon: 'mr-1' }}
                        sx={{
                            backgroundColor: (theme) => `rgba(${theme.vars.palette.secondary.mainChannel} / 0.6)`,
                            '&:hover, &:focus': {
                                backgroundColor: (theme) => `rgba(${theme.vars.palette.secondary.mainChannel} / 1)`
                            }
                        }}
                        startIcon={<SingularitySvgIcon size={16}>heroicons-outline:clipboard</SingularitySvgIcon>}
                    >
                        Copy
                    </Button>
                </Tooltip>
            )}

            <Wrapper
                className="m-0"
                ref={innerRef}
            >
                {source}
            </Wrapper>
        </div>
    );
}

function trimCode(children: SingularityHighlightProps['children']) {
    const sourceString = typeof children === 'string' ? children : children?.default;

    const sourceLines = sourceString?.split('\n');

    if (!sourceLines) {
        return '';
    }

    if (!sourceLines[0].trim()) {
        sourceLines.shift();
    }

    if (!sourceLines[sourceLines.length - 1].trim()) {
        sourceLines.pop();
    }

    const indexOfFirstChar = sourceLines[0].search(/\S|$/);

    let sourceRaw = '';

    sourceLines.forEach((line: string, index: number) => {
        sourceRaw += line.substr(indexOfFirstChar, line.length);

        if (index !== sourceLines.length - 1) {
            sourceRaw = `${sourceRaw}\n`;
        }
    });
    return sourceRaw;
}

const StyledSingularityHighlight = styled(SingularityHighlight)`` as unknown as typeof SingularityHighlight;

export default StyledSingularityHighlight;