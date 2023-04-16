import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IDay, IMonth, IWeek, IYear} from "../../../../shared/interfaces";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit, AfterViewInit {

  public days: IDay[] = [];
  public weeks: IWeek[] = [];
  public months: IMonth[] = [];
  public years: IYear[] = [];
  public selectedItem: string = 'day';

  constructor() {
  }

  ngOnInit() {
    const date = new Date();
    const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    this.getDays(currentDate);
    this.getWeeks(currentDate);
    this.getMonths(currentDate);
    this.getYears(currentDate);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const selectedDayElement = document.querySelector('.day_selected');
      console.log(selectedDayElement)
      selectedDayElement?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    }, 0)
  }

  public onSelectedItemChange(selectedItem: string) {
    this.selectedItem = selectedItem;
    if (selectedItem === 'week') {
      setTimeout(() => {
        const selectedWeekElement = document.querySelector('.week_selected');
        console.log(selectedWeekElement)
        selectedWeekElement?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
      }, 0)
    } else if (selectedItem === 'day') {
      setTimeout(() => {
        const selectedDayElement = document.querySelector('.day_selected');
        console.log(selectedDayElement)
        selectedDayElement?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
      }, 0)
    } else if (selectedItem === 'month') {
      setTimeout(() => {
        const selectedMonthElement = document.querySelector('.month_selected');
        selectedMonthElement?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
      }, 0)
    } else if (selectedItem === 'year') {
      setTimeout(() => {
        const selectedYearElement = document.querySelector('.year_selected');
        selectedYearElement?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
      }, 0)
    }
  }

  public onDayChange(selectedDay: number) {
    for (let i = 0; i < this.days.length; i++) {
      this.days[i].selected = i === selectedDay;
    }
  }

  public onWeekChange(selectedWeek: number) {
    for (let i = 0; i < this.weeks.length; i++) {
      this.weeks[i].selected = i === selectedWeek;
    }
  }

  public onMonthChange(selectedMonth: number) {
    for (let i = 0; i < this.months.length; i++) {
      this.months[i].selected = i === selectedMonth;
    }
  }

  public onYearChange(selectedYear: number) {
    for (let i = 0; i < this.years.length; i++) {
      this.years[i].selected = i === selectedYear;
    }
  }

  private getDays(currentDate: Date) {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    for (let i = firstDayOfMonth.getDate(); i <= lastDayOfMonth.getDate(); i++) {
      const dayName = new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toLocaleString('ru', {weekday: 'short'});
      this.days.push({day: dayName, date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i), selected: i === currentDate.getDate()});
    }
  }

  private getWeeks(currentDate: Date) {
    const currentYear = currentDate.getFullYear();

    // Создаем новый объект Date для 1 января указанного года
    const firstDayOfYear = new Date(currentYear, 0, 1);

    const lastDayOfYear = new Date(currentYear + 1, 0, 1);
    lastDayOfYear.setDate(lastDayOfYear.getDate() - 1);

    let lastSundayOfYear = lastDayOfYear;
    while (lastSundayOfYear.getDay() !== 0) {
      lastSundayOfYear.setDate(lastSundayOfYear.getDate() - 1);
    }

    let firstSundayOfYear = new Date(currentYear, 0, 1);
    while (firstSundayOfYear.getDay() !== 0) {
      firstSundayOfYear.setDate(firstSundayOfYear.getDate() + 1);
    }


    // Создаем новый объект Date для первой недели (от 1 числа до ближайшего понедельника)

    // Добавляем первую неделю в массив
    this.weeks.push({
      from: firstDayOfYear,
      to: new Date(firstSundayOfYear.getFullYear(), firstSundayOfYear.getMonth(), firstSundayOfYear.getDate()),
      selected: currentDate >= firstDayOfYear && currentDate <= new Date(firstSundayOfYear.getFullYear(), firstSundayOfYear.getMonth(), firstSundayOfYear.getDate()),
    });


    // Продолжаем добавлять недели до конца годаs
    let currentWeek = new Date(firstSundayOfYear.getFullYear(), firstSundayOfYear.getMonth(), firstSundayOfYear.getDate());
    while (currentWeek.getFullYear() === currentYear && new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 7) < lastDayOfYear) {
      // Создаем новый объект Date для следующей недели
      const nextMonday = new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 1);

      // Если следующая неделя заканчивается после последнего воскресенья года, корректируем конечную дату недели
      const nextSunday = new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 7);

      // Добавляем следующую неделю в массив
      this.weeks.push({
        from: nextMonday,
        to: nextSunday,
        selected: currentDate >= nextMonday && currentDate <= nextSunday
      });

      // Переходим к следующей неделе
      currentWeek = nextSunday;
    }


    this.weeks.push({
      from: new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 1),
      to: lastSundayOfYear,
      selected: currentDate >= new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 1) && currentDate <= lastSundayOfYear
    });

  }

  private getMonths(currentDate: Date) {
    for (let i = 0; i < 12; i++) {
      const monthTitle = new Date(currentDate.getFullYear(), i, 1).toLocaleString('ru', {month: "long"})
      this.months.push({title: monthTitle, selected: i === currentDate.getMonth()})
    }
  }

  private getYears(currentDate: Date) {
    const creationAppDate = new Date(2023, 1, 1);

    let year = creationAppDate.getFullYear();
    while (year <= currentDate.getFullYear()) {
      this.years.push({title: year, selected: year === currentDate.getFullYear()});
      year++;
    }
  }

  public formatDateToWeek(date: Date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}.${month}`;
  }

  public formatDateToDay(date: Date) {
    return date.getDate();
  }


}
