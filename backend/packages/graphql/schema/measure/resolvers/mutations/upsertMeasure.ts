import { Measure } from '@prisma/client';
import {
  Parent,
  Context,
  MutationUpsertMeasureArgs,
  UpsertMeasureInput,
  UpsertMeasureResult,
} from '../../../../types';
import { omit } from 'lodash';

async function upsertMeasure(
  _: Parent,
  args: MutationUpsertMeasureArgs,
  context: Context,
): Promise<UpsertMeasureResult> {
  const { prisma } = context;
  const { input } = args;
  const inputMeasure: UpsertMeasureInput = input;
  const {
    components,
    conceptsOfInterest,
    id: mId,
    indications,
    questions,
    recipe,
    reports,
  } = inputMeasure;

  // if we don't limit this to ids, prisma gets mad
  const coiIds = (conceptsOfInterest || []).map(({ id }) => ({ id }));
  const cIds = (components || []).map(({ id }) => ({ id }));
  const iIds = (indications || []).map(({ id }) => ({ id }));
  const qIds = (questions || []).map(({ id }) => ({ id }));
  const rIds = (reports || []).map(({ id }) => ({ id }));
  let measure: Measure | null = null;

  const getKey = (isUpdate) => (isUpdate ? 'set' : 'connect');
  const getData = (isUpdate = false) => {
    const key = getKey(isUpdate);
    return {
      ...omit(inputMeasure, ['id', 'url']),
      components: { [key]: cIds },
      conceptsOfInterest: { [key]: coiIds },
      indications: { [key]: iIds },
      questions: { [key]: qIds },
      recipe: recipe ? { [key]: { id: recipe.id } } : undefined,
      reports: { [key]: rIds },
    };
  };

  if (!mId) {
    measure = await prisma.measure.create({
      data: getData(),
    });
  } else {
    measure = await prisma.measure.update({
      where: { id: mId },
      data: getData(true),
    });
  }

  return { measure };
}

export default upsertMeasure;
