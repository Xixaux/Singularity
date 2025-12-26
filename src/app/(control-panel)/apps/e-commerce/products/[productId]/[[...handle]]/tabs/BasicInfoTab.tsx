'use client';

import { Box, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
import { EcommerceProduct } from '../../../../ECommerceApi';

function BasicInfoTab() {
    const { control, formState } = useFormContext();
    const { errors } = formState;

    return (
        <Box
            className="products-tab-container"
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2,
                alignItems: 'stretch',
                backgroundColor: '#EEEEEE',
                padding: 2,
                borderRadius: 1,
                '& > *': { height: '100%' },
            }}
        >
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        required
                        label="Name"
                        autoFocus
                        id="name"
                        variant="outlined"
                        fullWidth
                        error={!!errors.name}
                        helperText={errors?.name?.message as string}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        }}
                    />
                )}
            />
            <Controller
                name="categories"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, value } }) => (
                    <Autocomplete
                        multiple
                        freeSolo
                        options={[]}
                        value={value as EcommerceProduct['categories']}
                        onChange={(event, newValue) => {
                            onChange(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Select multiple categories"
                                label="Categories"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                }}
                            />
                        )}
                    />
                )}
            />
            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        id="description"
                        label="Description"
                        type="text"
                        multiline
                        rows={5}
                        variant="outlined"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        }}
                    />
                )}
            />
            <Controller
                name="tags"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, value } }) => (
                    <Autocomplete
                        multiple
                        freeSolo
                        options={[]}
                        value={value as EcommerceProduct['tags']}
                        onChange={(event, newValue) => {
                            onChange(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Select multiple tags"
                                label="Tags"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                }}
                            />
                        )}
                    />
                )}
            />
        </Box>
    );
}

export default BasicInfoTab;