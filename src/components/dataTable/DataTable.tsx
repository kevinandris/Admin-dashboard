import './dataTable.scss'
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useQueryClient, useMutation } from "@tanstack/react-query"

type Props = {
    columns: GridColDef[],
    rows: object[];
    slug: string;
}

const DataTable = (props: Props) => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn:(id:number) => {
            return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {method: "delete"})
        },
        onSuccess: () => {
            queryClient.invalidateQueries([`all${props.slug}`])
        }
    }) 

    const handleDelete = (id:number) => {
        // ! delete the item using axios
        // axios.delete(`/api/${slug}/id`)
        // console.log(id + " has been deleted!")

        // ! delete the item using reactQuery
        mutation.mutate(id)
    }
    
    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="" />
                    </Link>

                    <div className='delete'>
                        <img src="/delete.svg" alt="" onClick={() => handleDelete(params.row.id)}/>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='dataTable'>
                <DataGrid
                    className='dataGrid'
                    rows={props.rows}
                    columns={[...props.columns, actionColumn]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    slots={{toolbar: GridToolbar}}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: {debounceMs: 500}
                        }
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                />
        </div>
    )
}

export default DataTable