import path from 'path';
import fs from 'fs';
import express from 'express';

const router = express.Router();

const mainModuleFilename = require.main?.filename;
const root = mainModuleFilename ? path.dirname(mainModuleFilename) : '';
const folderRoutes = path.join(root, '../src/routes');

const removeExtension = (fileName: string) => {
    const parts = fileName.split('.');
    if (parts.length > 1) {
        return parts.slice(0, -1).join('.');
    }
    return fileName;
};

if (fs.existsSync(folderRoutes)) {
    fs.readdirSync(folderRoutes).filter(async (file) => {
        const fileWithoutExt = removeExtension(file);
        const skip = ['index'].includes(fileWithoutExt);
        if (!skip) {
            const pathName = fileWithoutExt === 'web' ? '/' : `/${fileWithoutExt}`;
            const pathFile = path.join(folderRoutes, fileWithoutExt);
            const module = await import(pathFile);
            router.use(pathName, module.default);
        }
    });
}

export default router;
