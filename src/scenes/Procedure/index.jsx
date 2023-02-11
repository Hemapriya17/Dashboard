import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";

const Procedure = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
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
      field: "Department",
      headerName: "Department",
      flex: 1,
    },
    {
      field: "Year",
      headerName: "Year",
      align: "left",
    },
    {
      field: "Institute",
      headerName: "Institute",
      align: "left",
    },
  ];

  const rows=[

    {id:12345, Procedure:"Air Wedge", Lab:"Physics", Department:"All", Year:"1",Institute:"PU"  },
    {id:13345, Procedure:"Polarimeter", Lab:"Physics", Department:"All", Year:"1",Institute:"PU"  },
{id:14345, Procedure:"EDTA", Lab:"Chemistry", Department:"All", Year:"1",Institute:"PU"  },

{id:15345, Procedure:"Lees disc", Lab:"Physics", Department:"All", Year:"1",Institute:"PU"  },

{id:16345, Procedure:"Water", Lab:"Chemistry", Department:"All", Year:"1",Institute:"PU"  },

{id:17345, Procedure:"Newton", Lab:"Physics", Department:"All", Year:"1",Institute:"PU"  },

  ]
  return (
    <Box m="20px">
      <Header
        title="PROCEDURE"
        subtitle=" Admins can only edit the Procedures"
      />
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
        }}
      >
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default Procedure;
