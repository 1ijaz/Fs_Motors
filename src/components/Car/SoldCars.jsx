import React, { useCallback, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const data2 = [
  {
    id: '08m6rx',
    carName: 'Honda Civic',
    carModel: 'Honda',
    carColor: 'Black',
    purchaseDate: '1/january/2022',
    saleDate: '1/january/2023',
    purchasePrice: '10M',
    salePrice: '15M',
    netProfit: '5M'
  },
  {
    id: '08m6rx',
    carName: 'Honda Civic',
    carModel: 'Honda',
    carColor: 'Black',
    purchaseDate: '1/january/2022',
    saleDate: '1/january/2023',
    purchasePrice: '10M',
    salePrice: '15M',
    netProfit: '5M'
  },
  {
    id: '5ymtrc',
    carName: 'Honda Civic',
    carModel: 'Honda',
    carColor: 'White',
    purchaseDate: '1/january/2022',
    saleDate: '1/january/2023',
    purchasePrice: '10M',
    salePrice: '15M',
    netProfit: '5M'
  },
  {
    id: 'ek5b97',
    carName: 'Honda Civic',
    carModel: 'Honda',
    carColor: 'White',
    purchaseDate: '1/january/2022',
    saleDate: '1/january/2023',
    purchasePrice: '10M',
    salePrice: '15M',
    netProfit: '5M'
  },
  {
    id: 'xxtydd',
    carName: 'Honda Civic',
    carModel: 'Honda',
    carColor: 'White',
    purchaseDate: '1/january/2022',
    saleDate: '1/january/2023',
    purchasePrice: '10M',
    salePrice: '15M',
    netProfit: '5M'
  },
  {
    id: 'wzxj9m',
    carName: 'Honda Civic',
    carModel: 'Honda',
    carColor: 'White',
    purchaseDate: '1/january/2022',
    saleDate: '1/january/2023',
    purchasePrice: '10M',
    salePrice: '15M',
    netProfit: '5M'
  },
  {
    id: '21dwtz',
    carName: 'Honda Civic',
    carModel: 'Honda',
    carColor: 'White',
    purchaseDate: '1/january/2022',
    saleDate: '1/january/2023',
    purchasePrice: '10M',
    salePrice: '15M',
    netProfit: '5M'
  },
  {
    id: 'o8oe4k',
    carName: 'Honda Civic',
    carModel: 'Honda',
    carColor: 'White',
    purchaseDate: '1/january/2022',
    saleDate: '1/january/2023',
    purchasePrice: '10M',
    salePrice: '15M',
    netProfit: '5M'
  }
];
const SoldCars = () => {
  // const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data2);
  const [validationErrors, setValidationErrors] = useState({});

  // const handleCreateNewRow = (values) => {
  //   tableData.push(values);
  //   setTableData([...tableData]);
  // };

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
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === 'carColor'
              ? validateEmail(event.target.value)
              : cell.column.id === 'age'
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
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
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80
      },
      {
        accessorKey: 'carName',
        header: 'Car Name',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell)
        })
      },
      {
        accessorKey: 'carModel',
        header: 'Car Model',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell)
        })
      },
      {
        accessorKey: 'carColor',
        header: 'Car Color',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'carColor'
        })
      },
      {
        accessorKey: 'purchaseDate',
        header: 'Purchase Date',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'number'
        })
      },
      {
        accessorKey: 'saleDate',
        header: 'Sold Date',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'number'
        })
      },
      {
        accessorKey: 'purchasePrice',
        header: 'Purchase Price',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'number'
        })
      },
      {
        accessorKey: 'salePrice',
        header: 'Sold Price',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'number'
        })
      },
      {
        accessorKey: 'netProfit',
        header: 'Net Profit',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'number'
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
      />
    </>
  );
};

//example of creating a mui dialog modal for creating new rows

const validateRequired = (value) => !!value.length;
const validateEmail = (carColor) =>
  !!carColor.length &&
  carColor
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default SoldCars;
