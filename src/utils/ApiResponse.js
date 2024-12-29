class ApiResponse{
    constructor(statuscode,data,message="success"){
        this.statusCode=this.statusCode
        this.message=message
        this.success=statusCode<400
    }
}
export {ApiResponse}