/**
 * Imports
 */
import { Router } from 'express';
import {
    // SecureRouteController,
    ResourceRoute,
    CreateMiddleware,
    ResourceRouteController,
    writerOnlyRoute,
    UpdateMiddleware
} from '../../../core';
import {
    BiologicalTreatmentController,
    BiologicalTreatmentSpec
} from '../../../../database/models';
@ResourceRoute({
    path: 'api/treatment/biological/#',
    description: 'API route controller for biological treatment',
    dataController: BiologicalTreatmentController.shared,
    // validators: CreateTreatmentValidator,
    secure: true
})
@CreateMiddleware(() => [writerOnlyRoute()])
@UpdateMiddleware(() => [writerOnlyRoute()])
export class BiologicalTreatmentRouteController extends ResourceRouteController<BiologicalTreatmentController, BiologicalTreatmentSpec, any> {
    static get shared(): BiologicalTreatmentRouteController {
        return this.sharedInstance() as BiologicalTreatmentRouteController;
    }
}

/**
 * @description Function to return Biological Treatment route handle
 * @export const biologicalTreatmentRoute
 */
export const biologicalTreatmentRoute = (): Router => {
    const controller = new BiologicalTreatmentRouteController();
    return controller.router;
};
// ---------------------------------------------------------
