import { createStore } from 'vuex';

interface State {
  attendanceRecords: any[];
}

export default createStore({
  state: {
    attendanceRecords: [],
  } as State,
  mutations: {
    setAttendanceRecords(state: State, records: any[]) {
      state.attendanceRecords = records;
    },
  },
  actions: {
    fetchAttendanceRecords({ commit }: any) {
      // Aquí puedes hacer la solicitud HTTP para obtener los registros de asistencia
      commit('setAttendanceRecords', []);
    },
  },
  modules: {},
});
