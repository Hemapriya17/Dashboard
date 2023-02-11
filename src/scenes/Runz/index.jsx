import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Runz = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const rows = [
    {
      id: 1,
      Procedure: "Air Wedge",
      Lab: "Physics",
      Description: "Test",
      Assigned: "shahana.learny@gmail.com",
      Grade: "8",
    },
    {
      id: 2,
      Procedure: "Polarimeter",
      Lab: "Physics",
      Description: "Test",
      Assigned: "shahana.learny@gmail.com",
      Grade: "8",
    },
    {
      id: 3,
      Procedure: "EDTA",
      Lab: "Chemistry",
      Description: "Test",
      Assigned: "abinaya.learny@gmail.com",
      Grade: "9",
    },

    {
      id: 4,
      Procedure: "Lees disc",
      Lab: "Physics",
      Description: "Test",
      Assigned: "abinaya.learny@gmail.com",
      Grade: "10",
    },

    {
      id: 5,
      Procedure: "Water",
      Lab: "Chemistry",
      Description: "Test",
      Assigned: "abinaya.learny@gmail.com",
      Grade: "7",
    },

    {
      id: 6,
      Procedure: "Newton",
      Lab: "Physics",
      Description: "Test",
      Assigned: "abinaya.learny@gmail.com",
      Grade: "9",
    },
  ];
  const columns = [
    { field: "id", headerName: "S.NO" },
    {
      field: "Procedure",
      headerName: "Procedure Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Lab",
      headerName: "Lab Name",
      flex: 1,
    },
    {
      field: "Description",
      headerName: "Description",
flex:1,    },
    {
      field: "Assigned",
      headerName: "Assigned by",
      flex: 1,
    },
    {
      field: "Grade",
      headerName: "Grade",
      align: "center",
    },
    {
      field: "Actions",
      headerName: "Actions",
      align: "left",
    },
  ];

  return (
    <Box m="20px">
      <Header title="RUNZ" subtitle="List of Runz" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Runz;
