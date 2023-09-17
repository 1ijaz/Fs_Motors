import React, { useCallback, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
//import moment from 'moment'; // Import Moment.js library
const data2 = [
  {
    RegistrationId: '1',
    Name: 'Honda',
    Model: 'Model 2022',
    Color: 'White',
    purchasePrice: '70M',
    purchaseDate: '1/January/2023',
    status: 'Show Room'
  },
  {
    RegistrationId: '2',
    Name: 'Honda',
    Model: 'Model 2022',
    Color: 'White',
    purchasePrice: '70M',
    purchaseDate: '1/January/2023',
    status: 'Show Room'
  },
  {
    RegistrationId: '3',
    Name: 'Honda',
    Model: 'Model 2022',
    Color: 'White',
    purchasePrice: '70M',
    purchaseDate: '1/January/2023',
    status: 'Show Room'
  },
  {
    RegistrationId: '4',
    Name: 'Honda',
    Model: 'Model 2022',
    Color: 'White',
    purchasePrice: '70M',
    purchaseDate: '1/January/2023',
    status: 'Show Room'
  },

  {
    RegistrationId: '5',
    Name: 'Honda',
    Model: 'Model 2022',
    Color: 'White',
    purchasePrice: '70M',
    purchaseDate: '1/January/2023',
    status: 'Show Room'
  },
  {
    RegistrationId: '6',
    Name: 'Honda',
    Model: 'Model 2022',
    Color: 'White',
    purchasePrice: '70M',
    purchaseDate: '1/January/2023',
    status: 'Show Room'
  }
];
const ManageCars = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data2);
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (!confirm(`Are you sure you want to delete ${row.getValue('firstName')}`)) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.RegistrationId],
        helperText: validationErrors[cell.RegistrationId],
        onBlur: (event) => {
          const isValid =
            cell.column.RegistrationId === 'email'
              ? validateEmail(event.target.value)
              : cell.column.RegistrationId === 'age'
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.RegistrationId]: `${cell.column.columnDef.header} is required`
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.RegistrationId];
            setValidationErrors({
              ...validationErrors
            });
          }
        }
      };
    },
    [validationErrors]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: 'RegistrationId',
        header: 'Registration #',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
        type: 'textbox'
      },
      {
        accessorKey: 'Name',
        header: 'Car Name',
        size: 140,
        type: 'textbox',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell)
        })
      },
      {
        accessorKey: 'Model',
        header: 'Model',
        size: 140,
        type: 'textbox',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell)
        })
      },
      {
        accessorKey: 'Color',
        header: 'Car Color',
        type: 'textbox',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell)
        })
      },
      {
        accessorKey: 'purchasePrice',
        header: 'Purchase Price',
        type: 'textbox',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell)
        })
      },
      {
        accessorKey: 'purchaseDate',
        header: 'Purchase Date',
        type: 'date',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell)
        })
      },
      {
        accessorKey: 'status',
        header: 'Current Status',
        type: 'textbox',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell)
        })
      }
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center'
            },
            size: 120
          }
        }}
        columns={columns}
        data={tableData}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button color="secondary" onClick={() => setCreateModalOpen(true)} variant="contained">
            Create New Car
          </Button>
        )}
      />
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {})
  );
  const renderFormField = (column) => {
    const { type, accessorKey, header } = column;

    switch (type) {
      case 'textbox':
        return (
          <TextField
            key={accessorKey}
            label={header}
            name={accessorKey}
            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
          />
        );
      case 'number':
        return (
          <TextField
            key={accessorKey}
            label={header}
            name={accessorKey}
            type="number"
            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
          />
        );
      case 'date': {
        const dateValue = values[accessorKey] instanceof Date ? values[accessorKey] : null;
        const formattedDate = dateValue ? dateValue.toLocaleDateString() : '';
        return (
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              key={accessorKey}
              label={header}
              name={accessorKey}
              value={formattedDate}
              onChange={(date) => setValues({ ...values, [accessorKey]: date })}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        );
      }

      default:
        return null;
    }
  };
  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const selectedImageArray = Array.from(files);

    setSelectedImages(selectedImageArray);
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Car</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem'
            }}
          >
            {columns.map(
              (column) => renderFormField(column) // Use the renderFormField function
            )}
            <div>
              <input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} style={{ display: 'block' }} />

              <div className="selected-images">
                <ul>
                  {selectedImages.map((image, index) => (
                    <li key={index}>{image.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Car
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default ManageCars;
