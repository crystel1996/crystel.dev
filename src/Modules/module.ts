import { AboutModule, ExperienceModule, HomeModule, WorkModule, DownloadModule, ContactModule } from '../Pages';
import { MODULE_INTERFACE } from './interface';


export const MODULES: MODULE_INTERFACE[] = [
    ...HomeModule,
    ...AboutModule,
    ...ExperienceModule,
    ...WorkModule,
    ...DownloadModule,
    ...ContactModule
]