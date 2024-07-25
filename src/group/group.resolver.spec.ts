import { Test, TestingModule } from '@nestjs/testing';
import { GroupResolver } from './group.resolver';
import { GroupService } from './group.service';

describe('GroupResolver', () => {
  let resolver: GroupResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupResolver, GroupService],
    }).compile();

    resolver = module.get<GroupResolver>(GroupResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
