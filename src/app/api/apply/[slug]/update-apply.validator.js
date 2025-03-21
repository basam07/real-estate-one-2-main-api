import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class UpdateApplyValidator extends AbstractValidator {
    getValidator() {
        return {
            body: Joi.object({
                id: Joi.string().required(), // Required for identifying the record to update
                title: Joi.string().required(),
                description: Joi.string().required(),
                email: Joi.string().email().required(),
            }),
        };
    }
}