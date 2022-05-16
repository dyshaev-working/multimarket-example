import { InternalServerErrorException } from '@nestjs/common';
import MarketEnum from './common.enum';

export const getInstances = (
  instances: any[],
  market: MarketEnum | string,
): any[] => {
  const initInstances = instances.filter(
    (instance) => instance.market === market,
  );

  if (initInstances.length) {
    return initInstances;
  }

  const baseInstances = instances.filter(
    (instances) => instances.market === MarketEnum.BASE,
  );

  if (baseInstances.length) {
    return baseInstances;
  }

  throw new InternalServerErrorException(
    'Instances for init was not found. Please check configuration!',
  );
};

export const getInstance = (
  instances: any[],
  market: MarketEnum | string,
): any => {
  const initInstance = instances.find((instance) => instance.market === market);

  if (initInstance) {
    return initInstance;
  }

  const baseInstance = instances.find(
    (instance) => instance.market === MarketEnum.BASE,
  );

  if (baseInstance) {
    return baseInstance;
  }

  throw new InternalServerErrorException(
    'Instance for init was not found. Please check configuration!',
  );
};
