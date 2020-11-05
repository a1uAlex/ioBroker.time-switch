import { AstroTime } from './AstroTime';
import { BaseDailyTrigger } from './BaseDailyTrigger';
import { Weekday } from './Weekday';
import { Action } from '../actions/Action';

export class AstroTrigger extends BaseDailyTrigger {
	public static readonly MAX_SHIFT = 240;

	private readonly astroTime: AstroTime;

	private readonly shiftInMinutes: number;

	constructor(id: string, astroTime: AstroTime, shiftInMinutes: number, weekdays: Weekday[], action: Action) {
		super(id, action, weekdays);
		if (astroTime == null) {
			throw new Error('Astro time may not be null.');
		}
		if (
			shiftInMinutes == null ||
			shiftInMinutes > AstroTrigger.MAX_SHIFT ||
			shiftInMinutes < -AstroTrigger.MAX_SHIFT
		) {
			throw new Error('Shift in minutes must be in range -240 to 240.');
		}
		this.astroTime = astroTime;
		this.shiftInMinutes = shiftInMinutes;
	}

	public getAstroTime(): AstroTime {
		return this.astroTime;
	}

	public getShiftInMinutes(): number {
		return this.shiftInMinutes;
	}
}
