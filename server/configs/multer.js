import multer from "multer";

//images are stored in dotnet file using middleware
const storage = multer.diskStorage({});

export const upload = multer({storage});
