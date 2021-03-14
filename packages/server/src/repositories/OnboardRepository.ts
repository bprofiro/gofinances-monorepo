import Onboard from '../models/Onboard';

class OnboardRepository {
  private onboards: Onboard[];

  constructor() {
    this.onboards = [];
  }

  public create(userId: string): Onboard {
    const onboard = new Onboard({ user_id: userId, date: new Date() });
    this.onboards.push(onboard);

    return onboard;
  }

  public findById(userId: string): Onboard | undefined {
    const findUserById = this.onboards.find((onboard) => onboard.user_id === userId);

    return findUserById;
  }
}

export default OnboardRepository;
