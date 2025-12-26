'use client';

import Typography from '@mui/material/Typography';
import { useAppDispatch } from 'src/store/hooks';

/**
 * QueryDev Doc
 * This document provides information on how to use the QueryDev.
 */
function QueryDevDoc() {
    const dispatch = useAppDispatch();

    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                QueryDev
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Advanced Documentation Underway
            </Typography>
        </>
    );
}

export default QueryDevDoc;