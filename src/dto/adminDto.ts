// Para criar um manager no POST /admin/managers
// REQUEST
export interface ICreateManagerRequestDTO {
  id: number;       // ID do funcionário na empresa
  name: string;     
  email: string;
}

// RESPONSE
export interface ICreateManagerResponseDTO {
  message: string;     // "Manager created and linked to company successfully"
  managerId: number;   // ID do manager criado
}