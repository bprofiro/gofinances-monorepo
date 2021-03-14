import Onboard from '../models/Onboard';
import OnboardRepository from '../repositories/OnboardRepository';

class OnboardUserService {
  private onboardRepository: OnboardRepository;

  constructor(onboardRepository: OnboardRepository) {
    this.onboardRepository = onboardRepository;
  }

  public async execute(userId: string): Promise<Onboard> {
    const checkUserOnboardExists = this.onboardRepository.findById(userId);

    if (checkUserOnboardExists) {
      throw new Error('This user is already onboarded');
    }

    const onboard = this.onboardRepository.create(userId);

    return onboard;
  }
}

export default OnboardUserService;
