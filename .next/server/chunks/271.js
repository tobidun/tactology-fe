"use strict";exports.id=271,exports.ids=[271],exports.modules={7271:(e,t,a)=>{a.d(t,{VR:()=>r,aZ:()=>d,hf:()=>m,k_:()=>i,mG:()=>p});var n=a(5325);let m=n.gql`
  query GetDepartments {
    departments {
      id
      name
      createdBy {
        id
        username
      }
      subDepartments {
        id
        name
      }
    }
  }
`,p=n.gql`
  query department($id: Float!) {
    department(id: $id) {
      name
      subDepartments {
        id
        name
      }
    }
  }
`,r=n.gql`
  mutation createDepartment($input: CreateDepartmentInput!) {
    createDepartment(input: $input) {
      id
      name
      subDepartments {
        id
        name
      }
    }
  }
`,d=n.gql`
  mutation updateDepartment($input: UpdateDepartmentInput!) {
    updateDepartment(input: $input) {
      id
      name
      subDepartments {
        name
      }
    }
  }
`,i=n.gql`
  mutation deleteDepartment($id: ID!) {
    deleteDepartment(id: $id) {
      id
    }
  }
`}};